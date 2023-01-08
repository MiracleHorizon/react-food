import {
  BadRequestException,
  ForbiddenException,
  Injectable
} from '@nestjs/common'
import type { Request, Response } from 'express'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { PrismaService } from 'prisma/prisma.service'
import { AuthDto } from './dto/auth.dto'
import { CreateUserDto } from './dto/create-user.dto'
import type { ComparePasswordsArgs } from '@/models/auth/ComparePasswordsArgs'
import type { SignTokenArgs } from '@/models/auth/SignTokenArgs'
import type { Res } from '@/models/Res'

@Injectable()
export class AuthService {
  private PASSWORD_HASH_SALT = 10

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  public async signUp({
    res,
    email,
    password,
    ...otherData
  }: CreateUserDto & Res): Promise<void> {
    const isUserExists = await this.isUserWithEmailExists(email)

    if (isUserExists) {
      throw new BadRequestException('User with this email already exists.')
    }

    const hashedPassword = await this.hashPassword(password)

    await this.prisma.user.create({
      data: {
        email,
        hashedPassword,
        ...otherData
      }
    })

    res.send({
      message: 'User successfully created.'
    })
  }

  public async signIn(
    { email, password }: AuthDto,
    req: Request,
    res: Response
  ): Promise<void> {
    const isUserExists = await this.isUserWithEmailExists(email)

    if (!isUserExists) {
      throw new BadRequestException('Wrong credentials.')
    }

    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    const isPasswordsMatch = await this.comparePasswords({
      password,
      passwordHash: user.hashedPassword
    })

    if (!isPasswordsMatch) {
      throw new BadRequestException('Wrong credentials.')
    }

    const token = await this.signToken({
      id: user.id,
      email
    })

    if (!token) {
      throw new ForbiddenException()
    }

    res.cookie('token', token)

    res.send({
      message: 'Logged in successfully.'
    })
  }

  public async signOut(req: Request, res: Response): Promise<void> {
    res.clearCookie('token')

    res.send({
      message: 'Logged out successfully.'
    })
  }

  private async isUserWithEmailExists(email: string): Promise<boolean> {
    return await this.prisma.user
      .findUnique({
        where: {
          email
        }
      })
      .then(result => Boolean(result))
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.PASSWORD_HASH_SALT)
  }

  private async comparePasswords({
    password,
    passwordHash
  }: ComparePasswordsArgs): Promise<boolean> {
    return await bcrypt.compare(password, passwordHash)
  }

  private async signToken(payload: SignTokenArgs): Promise<string> {
    return await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET
    })
  }
}
