import {
  Injectable,
  NotFoundException,
  ForbiddenException
} from '@nestjs/common'
import type { Order } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import { OrderStatus } from '@/models/order/OrderStatus'
import type { CreateOrderParams } from '@/models/order/CreateOrderParams'
import type { UpdateOrderStatusParams } from '@/models/order/UpdateOrderStatusParams'

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({
    userId,
    productsData,
    res,
    ...dto
  }: CreateOrderParams) {
    const order = await this.prisma.order.create({
      data: {
        userId,
        ...dto
      }
    })

    await this.prisma.orderProduct.createMany({
      data: productsData.map(product => ({
        ...product,
        orderId: order.id
      }))
    })

    return res.send({
      message: 'Order successfully created.'
    })
  }

  public async getOne(orderId: string, userId: string): Promise<Order> {
    const order = await this.prisma.order.findUnique({
      where: {
        id: orderId
      }
    })

    if (!order) throw new NotFoundException('Order is not found.')

    if (userId !== order.userId) throw new ForbiddenException()

    return order
  }

  public async getAll(userId: string) {
    const orders = await this.prisma.order.findMany({
      where: {
        userId
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        totalPrice: true,
        products: {
          select: {
            imageUrl: true
          }
        }
      },
      take: 6
    })

    return orders.map(order => ({
      ...order,
      products: order.products.slice(0, 5),
      productCount: order.products.length
    }))
  }

  public async updateStatus({
    userId,
    orderId,
    status,
    res
  }: UpdateOrderStatusParams) {
    const order = await this.prisma.order.findUnique({
      where: {
        id: orderId
      }
    })

    if (!order) throw new NotFoundException('Order is not found.')

    if (userId !== order.userId) throw new ForbiddenException()

    await this.prisma.order.update({
      where: {
        id: orderId
      },
      data: {
        status
      }
    })

    return res.send({
      message: 'Order status successfully updated.'
    })
  }

  public async cancel(orderId: string) {
    await this.prisma.order.update({
      where: {
        id: orderId
      },
      data: {
        status: OrderStatus.CANCELED
      }
    })
  }
}
