import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Request } from 'express'
import type { User } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import type { ClientUser } from '@/models/user/ClientUser'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // @User & @Admin
  public async findOne(userId: string, req: Request): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId
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
  public async findAll(): Promise<ClientUser[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        login: true
      }
    })
  }
}
