import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from '@/modules/auth/auth.module'
import { UsersModule } from '@/modules/users/users.module'
import { AddressModule } from '@/modules/address/address.module'
import { ProductModule } from '@/modules/product/product.module'
import { ProductCategoryModule } from '@/modules/product-category/product-category.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    AddressModule,
    ProductModule,
    ProductCategoryModule
  ]
})
export class AppModule {}
