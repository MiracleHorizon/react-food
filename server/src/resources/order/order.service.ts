import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { OrderStatus } from '@/models/order/OrderStatus'
import type { CreateOrderArgs } from '@/models/order/CreateOrderArgs'
import type { UpdateOrderStatusArgs } from '@/models/order/UpdateOrderStatusArgs'
import type { ClientOrder } from '@/models/order/ClientOrder'

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  public async create({
    userId,
    productsData,
    res,
    ...dto
  }: CreateOrderArgs): Promise<void> {
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

    res.send({
      message: 'Order successfully created.'
    })
  }

  // TODO Обновить тип
  public async findOne(orderId: string, userId: string): Promise<any> {
    const order = await this.prisma.order.findUnique({
      where: {
        id: orderId
      },
      select: {
        id: true,
        userId: true,
        products: {
          select: {
            title: true,
            count: true,
            price: true
          }
        },
        totalCost: true,
        productsCost: true,
        deliveryCost: true,
        serviceFee: true,
        createdAt: true
      }
    })

    if (!order) throw new NotFoundException('Order is not found.')

    if (userId !== order.userId) throw new ForbiddenException()

    delete order.userId

    return order
  }

  public async findAll(userId: string): Promise<ClientOrder[]> {
    const orders = await this.prisma.order.findMany({
      where: {
        userId
      },
      select: {
        id: true,
        status: true,
        createdAt: true,
        totalCost: true,
        products: {
          select: {
            imagePath: true
          }
        }
      },
      take: 6
    })

    return orders.map(order => ({
      ...order,
      products: order.products.slice(0, 5),
      productsCount: order.products.length
    }))
  }

  public async updateStatus({
    userId,
    orderId,
    status,
    res
  }: UpdateOrderStatusArgs): Promise<void> {
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

    res.send({
      message: 'Order status successfully updated.'
    })
  }

  // TODO Дополнить.
  public async cancel(orderId: string): Promise<void> {
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
