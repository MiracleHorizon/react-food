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

  // TODO: Return type
  public async create({
    userId,
    productsData,
    deliveryAddress,
    ...dto
  }: CreateOrderArgs): Promise<{ orderId: string }> {
    // TODO: Delivered at
    const order = await this.prisma.order.create({
      data: {
        userId,
        deliveredAt: new Date(Date.now() + (3600 / 2) * 1000),
        deliveryAddress: deliveryAddress.street + ' ' + deliveryAddress.house,
        ...dto
      }
    })

    // TODO: PRICE
    await this.prisma.orderProduct.createMany({
      data: productsData.map(product => ({
        count: product.count,
        orderId: order.id,
        price: Math.ceil(
          product.fullPrice -
            (product.fullPrice / 100) * product.discountPercent
        ),
        title: product.title,
        imagePath: product.imagePath
      }))
    })

    return {
      orderId: order.id
    }
  }

  // TODO: Пагинация
  public async findAllUserOrders(userId: string): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      where: {
        userId
      },
      include: {
        products: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return orders.map(order => ({
      ...order,
      products: order.products.slice(0, 5),
      productsCount: order.products.length
    }))
  }

  // TODO: Права
  public async fetchUserOrderById(orderId: string): Promise<Order> {
    const order = await this.prisma.order.findUnique({
      where: {
        id: orderId
      }
    })

    if (!order) {
      throw new NotFoundException('Order is not found')
    }

    return order
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
