import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { CartController } from './cart.controller'
import { CartService } from './cart.service'
import { ProductService } from '@resources/product/product.service'
import { UsersService } from '@resources/users/users.service'

@Module({
  controllers: [CartController],
  providers: [CartService, ProductService, UsersService, PrismaService]
})
export class CartModule {}
