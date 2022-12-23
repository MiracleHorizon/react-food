import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Request } from 'express'

import { PrismaService } from 'prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUser(id: string, req: Request) {
    const user = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new NotFoundException()
    }

    // TODO Доработать
    const userFromClient = req.user as { id: string }

    if (user.id !== userFromClient.id) {
      throw new ForbiddenException()
    }

    delete user.hashedPassword

    return { user }
  }

  // @Admin
  public async getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true
      }
    })
  }
}
