import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserRole } from '@prisma/client'
import type { Response } from 'express'

import { PrismaService } from 'prisma/prisma.service'
import { BcryptProvider } from '@utils/BcryptProvider'
import { excludeField } from '@common/helpers/excludeField'
import type { SignupDto } from './dto'
import type { Tokens } from './models'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
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

    const { id, email, role } = newUser
    const tokens = await this.signUserTokens(id, email, role)
    await this.updateRefreshToken(id, tokens.refreshToken)

    // При регистрации нового пользователя для него создаётся корзина
    const cart = await this.prisma.cart.create({
      data: {
        userId: id
      }
    })

    const userToClient = excludeField(newUser, [
      'hashedPassword',
      'hashedRefreshToken'
    ])

    res.cookie('accessToken', tokens.accessToken)
    res.cookie('refreshToken', tokens.refreshToken)

    res.send({
      user: userToClient,
      cart
    })
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

  public async signinLocal(dto: any, res: Response): Promise<void> {
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

    const { id, email, role } = user
    const tokens = await this.signUserTokens(id, email, role)
    await this.updateRefreshToken(id, tokens.refreshToken)

    res.cookie('accessToken', tokens.accessToken)
    res.cookie('refreshToken', tokens.refreshToken)

    res.send({
      ...excludeField(user, ['hashedPassword', 'hashedRefreshToken'])
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

    res.clearCookie('refreshToken')
    res.clearCookie('accessToken')

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

    const { id, email, role } = user
    const tokens = await this.signUserTokens(id, email, role)
    await this.updateRefreshToken(id, tokens.refreshToken)

    res.cookie('accessToken', tokens.accessToken)
    res.cookie('refreshToken', tokens.refreshToken)

    res.send({
      ...excludeField(user, ['hashedPassword', 'hashedRefreshToken'])
    })
  }

  private async isUserExists(email: string): Promise<boolean> {
    return await this.prisma.user
      .findUnique({ where: { email } })
      .then(result => Boolean(result))
  }
}
