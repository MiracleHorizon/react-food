import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import type { Order } from '@prisma/client'

import { PrismaService } from 'prisma/prisma.service'
import type { CreateOrderArgs } from './models/CreateOrderArgs'
import type { UpdateOrderStatusArgs } from './models/UpdateOrderStatusArgs'

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

    // TODO: PRICE
    await this.prisma.orderProduct.createMany({
      data: productsData.map(product => ({
        ...product,
        price: product.fullPrice,
        orderId: order.id
      }))
    })

    res.send({
      message: 'Order successfully created'
    })
  }

  // TODO: Пагинация
  public async findAllUserOrders(userId: string): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      where: {
        userId
      },
      include: {
        products: true
      }
    })

    return orders.map(order => ({
      ...order,
      products: order.products.slice(0, 5),
      productsCount: order.products.length
    }))
  }

  public getOrderParameters() {
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

    if (!order) {
      throw new NotFoundException('Order is not found')
    }

    if (userId !== order.userId) {
      throw new ForbiddenException()
    }

    await this.prisma.order.update({
      where: {
        id: orderId
      },
      data: {
        status
      }
    })

    res.send({
      message: 'Order status successfully updated'
    })
  }
}
