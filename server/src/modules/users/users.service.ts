import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { Request } from 'express'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getUser(id: string, req: Request) {
    const user = await this.prismaService.user.findUnique({
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

  public async getAllUsers() {
    return this.prismaService.user.findMany({
      select: { id: true, email: true }
    })
  }
}
