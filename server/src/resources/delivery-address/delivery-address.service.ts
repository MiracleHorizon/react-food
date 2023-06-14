import { Injectable } from '@nestjs/common'
import type { Response } from 'express'
import type { DeliveryAddress } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateDeliveryAddressArgs } from '@resources/delivery-address/models/CreateDeliveryAddressArgs'

// TODO: Проверка на доступ пользователя
@Injectable()
export class DeliveryAddressService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({
    userId,
    res,
    ...dto
  }: CreateDeliveryAddressArgs): Promise<void> {
    await this.prisma.deliveryAddress.create({
      data: {
        ...dto,
        userId
      }
    })

    res.send({
      message: 'Delivery address successfully created'
    })
  }

  public async findAllUserAddresses(
    userId: string
  ): Promise<DeliveryAddress[]> {
    return await this.prisma.deliveryAddress.findMany({
      where: {
        userId
      }
    })
  }

  public async removeOne(addressId: string, res: Response): Promise<void> {
    await this.prisma.deliveryAddress.delete({
      where: {
        id: addressId
      }
    })

    res.send({
      message: `Delivery address with id: ${addressId} successfully removed`
    })
  }

  public async removeAllUserAddresses(
    userId: string,
    res: Response
  ): Promise<void> {
    await this.prisma.deliveryAddress.deleteMany({
      where: {
        userId
      }
    })

    res.send({
      message: `All delivery addresses for user with id: ${userId} successfully removed`
    })
  }
}
