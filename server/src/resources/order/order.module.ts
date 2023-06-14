import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { CartService } from '@resources/cart/cart.service'
import { UsersService } from '@resources/users/users.service'
import { ProductService } from '@resources/product/product.service'

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    PrismaService,
    CartService,
    ProductService,
    UsersService
  ]
})
export class OrderModule {}
