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

  public fetchOrderParameters() {
    // TODO: Менять значения в зависимости от, например, времени суток

    const SERVICE_FEE = 49
    const MIN_ORDER_COST = 1e3
    const MAX_ORDER_COST = 4e4
    const MAX_ORDER_WEIGHT = 3e4
    const FREE_DELIVERY_ORDER_COST = 1.5e3
    const DELIVERY_COST_RANGE = { start: 0, end: 399 }
    const DELIVERY_TIME_RANGE = { start: 30, end: 55 }
    const DELIVERY_DISTANCE = 5.6e3

    return {
      serviceFee: SERVICE_FEE,
      minOrderCost: MIN_ORDER_COST,
      maxOrderCost: MAX_ORDER_COST,
      maxOrderWeight: MAX_ORDER_WEIGHT,
      freeDeliveryOrderCost: FREE_DELIVERY_ORDER_COST,
      deliveryCostRange: DELIVERY_COST_RANGE,
      deliveryTimeRange: DELIVERY_TIME_RANGE,
      deliveryDistance: DELIVERY_DISTANCE
    }
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
