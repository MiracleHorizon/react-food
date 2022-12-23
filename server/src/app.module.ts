import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './resources/auth/auth.module'
import { UsersModule } from './resources/users/users.module'
import { AddressModule } from './resources/address/address.module'
import { OrderModule } from './resources/order/order.module'
import { ProductModule } from './resources/product/product.module'
import { ProductCategoryModule } from './resources/product-category/product-category.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    OrderModule,
    AddressModule,
    ProductModule,
    ProductCategoryModule
  ]
})
export class AppModule {}
