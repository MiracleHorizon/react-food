import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { CartController } from './cart.controller'
import { CartService } from './cart.service'
import { ProductService } from '@resources/product/product.service'

@Module({
  controllers: [CartController],
  providers: [CartService, ProductService, PrismaService]
})
export class CartModule {}
