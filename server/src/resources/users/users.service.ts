import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import type { User } from '@prisma/client'
import type { UserToClient } from './models/UserToClient'
import type { ChangePersonalDataDto } from './dto/ChangePersonalDataDto'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // @User & @Admin
  public async findOne(userId: string): Promise<User> {
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

    if (!user) {
      throw new NotFoundException('User is not found')
    }

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

  public async changePersonalData(
    userId: string,
    dto: ChangePersonalDataDto
  ): Promise<User> {
    const user = await this.findOne(userId)

    for (const [key, value] of Object.entries(dto)) {
      if (dto[key] !== user[key]) {
        await this.prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            [key]: value
          }
        })
      }
    }

    return this.findOne(userId)
  }

  public async checkIsExistsById(id: string): Promise<boolean> {
    return this.prisma.user
      .findFirst({ where: { id } })
      .then(result => Boolean(result))
  }
}
