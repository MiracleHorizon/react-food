import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Request } from 'express'
import type { User } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import type { UserToClient } from '@/models/user/UserToClient'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // @User & @Admin
  public async findOne(userId: string, req: Request): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
      },
      include: {
        cart: {
          select: {
            id: true,
            products: true
          }
        }
      }
    })

    if (!user) throw new NotFoundException('User is not found.')

    // TODO Доработать
    const userFromClient = req.user as { id: string }

    if (user.id !== userFromClient.id) throw new ForbiddenException()

    delete user.hashedPassword

    return user
  }

  // @Admin
  public async findAll(): Promise<UserToClient[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true
      }
    })
  }

  public async checkIsExistsById(id: string): Promise<boolean> {
    return this.prisma.user
      .findFirst({ where: { id } })
      .then(result => Boolean(result))
  }
}
