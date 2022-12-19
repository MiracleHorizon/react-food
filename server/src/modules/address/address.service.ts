import { Injectable } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { CreateAddressDto } from '@/modules/address/dto/create-address.dto'

// TODO Проверка на доступ пользователя.
@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(userId: string, dto: CreateAddressDto) {
    return await this.prisma.address.create({
      data: {
        ...dto,
        userId
      }
    })
  }

  public async getAllUserAddresses(userId: string) {
    return await this.prisma.address.findMany({
      where: {
        userId
      }
    })
  }

  public async delete(addressId: string) {
    return await this.prisma.address.delete({
      where: {
        id: addressId
      }
    })
  }

  public async deleteAllUserAddresses(userId: string) {
    return await this.prisma.address.deleteMany({
      where: {
        userId
      }
    })
  }
}
