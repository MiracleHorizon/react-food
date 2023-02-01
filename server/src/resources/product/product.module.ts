import { Module } from '@nestjs/common'

import { ProductService } from './product.service'
import { UsersService } from '@/resources/users/users.service'

@Module({
  providers: [UsersService, ProductService]
})
export class ProductModule {}
