import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { type User, UserRole } from '@prisma/client'
import type { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import { BcryptProvider } from '@utils/BcryptProvider'
import { CartService } from '@resources/cart/cart.service'
import { excludeField } from '@common/helpers/excludeField'
import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME
} from '@constants/cookie'
import type { SigninDto, SignupDto } from './dto'
import type { Tokens } from './models'
import type { UserToClient } from '@resources/users/models/UserToClient'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly cartService: CartService
  ) {}

  public async signupLocal(dto: SignupDto, res: Response): Promise<void> {
    const isUserExists = await this.isUserExists(dto.email)
    if (isUserExists) {
      throw new BadRequestException('User already exists')
    }

    const hashedPassword = await BcryptProvider.hash(dto.password, 10)
    const newUser = await this.prisma.user.create({
      data: {
        ...excludeField(dto, ['password']),
        hashedPassword
      }
    })

    // При регистрации нового пользователя для него создаётся корзина
    const userCart = await this.prisma.cart.create({
      data: {
        userId: newUser.id
      }
    })

    const userToClient = this.getUserToClient(newUser)
    const tokens = await this.updateTokens(newUser)

    this.setTokensToResCookies(tokens, res)
    res.send({
      user: userToClient,
      cart: userCart
    })
  }

  public async signinLocal(dto: SigninDto, res: Response): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email
      }
    })

    if (!user) {
      throw new NotFoundException('User is not found')
    }

    const isPasswordsMatch = await BcryptProvider.compare(
      dto.password,
      user.hashedPassword
    )

    if (!isPasswordsMatch) {
      throw new ForbiddenException('Access denied')
    }

    const userToClient = await this.getUserToClient(user)
    const userCart = await this.cartService.findOneByUser(user.id)
    const tokens = await this.updateTokens(user)

    this.setTokensToResCookies(tokens, res)
    res.send({
      user: userToClient,
      cart: userCart
    })
  }

  public async signout(userId: string, res: Response): Promise<void> {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashedRefreshToken: {
          not: null
        }
      },
      data: {
        hashedRefreshToken: null
      }
    })

    this.clearTokensCookies(res)
    res.send({
      message: 'Successfully logged out'
    })
  }

  public async refreshTokens(
    userId: string,
    refreshToken: string,
    res: Response
  ): Promise<void> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    if (!user) {
      throw new NotFoundException('User is not found')
    }
    if (!user.hashedRefreshToken) {
      throw new ForbiddenException('Bad credentials')
    }

    const isTokensMatches = await BcryptProvider.compare(
      refreshToken,
      user.hashedRefreshToken
    )
    if (!isTokensMatches) {
      throw new ForbiddenException('Bad credentials')
    }

    const userToClient = this.getUserToClient(user)
    const userCart = await this.cartService.findOneByUser(user.id)
    const tokens = await this.updateTokens(user)

    this.setTokensToResCookies(tokens, res)
    res.send({
      user: userToClient,
      cart: userCart
    })
  }

  private async updateTokens(user: User): Promise<Tokens> {
    const { id, email, role } = user
    const tokens = await this.signUserTokens(id, email, role)
    await this.updateRefreshToken(id, tokens.refreshToken)

    return tokens
  }

  private async signUserTokens(
    userId: string,
    email: string,
    role: UserRole
  ): Promise<Tokens> {
    const tokenPayload = { sub: userId, email, role }

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(tokenPayload, {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: 60 * 15
      }),
      this.jwtService.signAsync(tokenPayload, {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '30d'
      })
    ])

    return {
      accessToken,
      refreshToken
    }
  }

  private async updateRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<void> {
    const hashedRefreshToken = await BcryptProvider.hash(refreshToken, 10)
    await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        hashedRefreshToken
      }
    })
  }

  private setTokensToResCookies(tokens: Tokens, res: Response): void {
    res.cookie(ACCESS_TOKEN_COOKIE_NAME, tokens.accessToken)
    res.cookie(REFRESH_TOKEN_COOKIE_NAME, tokens.refreshToken)
  }

  private clearTokensCookies(res: Response): void {
    res.clearCookie(ACCESS_TOKEN_COOKIE_NAME)
    res.clearCookie(REFRESH_TOKEN_COOKIE_NAME)
  }

  private async isUserExists(email: string): Promise<boolean> {
    return await this.prisma.user
      .findUnique({ where: { email } })
      .then(result => Boolean(result))
  }

  private getUserToClient(user: User): UserToClient {
    return excludeField(user, ['hashedRefreshToken', 'hashedPassword'])
  }
}
