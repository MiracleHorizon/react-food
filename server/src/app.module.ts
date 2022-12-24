import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from '@/resources/auth/auth.module'
import { UsersModule } from '@/resources/users/users.module'
import { OrderModule } from '@/resources/order/order.module'
import { DeliveryAddressModule } from '@/resources/delivery-address/delivery-address.module'
import { BillingCardModule } from '@/resources/billing-card/billing-card.module'
import { ProductModule } from '@/resources/product/product.module'
import { ProductCategoryModule } from '@/resources/product-category/product-category.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    OrderModule,
    DeliveryAddressModule,
    BillingCardModule,
    ProductModule,
    ProductCategoryModule
  ]
})
export class AppModule {}
