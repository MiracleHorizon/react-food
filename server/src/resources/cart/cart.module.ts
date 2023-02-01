import { Module } from '@nestjs/common'

import { CartService } from './cart.service'
import { CartController } from './cart.controller'
import { ProductService } from '@/resources/product/product.service'
import { UsersService } from '@/resources/users/users.service'

@Module({
  controllers: [CartController],
  providers: [CartService, ProductService, UsersService]
})
export class CartModule {}
