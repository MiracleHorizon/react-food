import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { DeliveryAddress } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateDeliveryAddressArgs } from '@resources/delivery-address/models/CreateDeliveryAddressArgs'

@Injectable()
export class DeliveryAddressService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({
    userId,
    ...dto
  }: CreateDeliveryAddressArgs): Promise<void> {
    await this.prisma.deliveryAddress.create({
      data: {
        ...dto,
        userId
      }
    })
  }

  public async findAllUserAddresses(
    userId: string
  ): Promise<DeliveryAddress[]> {
    return this.prisma.deliveryAddress.findMany({
      where: {
        userId
      }
    })
  }

  public async removeOne(addressId: string, userId: string): Promise<void> {
    const address = await this.prisma.deliveryAddress.findUnique({
      where: {
        id: addressId
      }
    })

    if (!address) {
      throw new NotFoundException('Address is not found')
    }

    if (address.userId !== userId) {
      throw new ForbiddenException('Access denied')
    }

    await this.prisma.deliveryAddress.delete({
      where: {
        id: addressId
      }
    })
  }
}
