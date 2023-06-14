import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from '@resources/auth/auth.module'
import { UsersModule } from '@resources/users/users.module'
import { CartModule } from '@resources/cart/cart.module'
import { OrderModule } from '@resources/order/order.module'
import { ProductCategoryModule } from '@resources/product-category/product-category.module'
import { ProductSubcategoryModule } from '@resources/product-subcategory/product-subcategory.module'
import { ProductModule } from '@resources/product/product.module'
import { EnvironmentModule } from '@resources/environment/environment.module'
import { DeliveryAddressModule } from '@resources/delivery-address/delivery-address.module'
import { BillingCardModule } from '@resources/billing-card/billing-card.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    CartModule,
    OrderModule,
    DeliveryAddressModule,
    BillingCardModule,
    ProductCategoryModule,
    ProductSubcategoryModule,
    ProductModule,
    EnvironmentModule
  ]
})
export class AppModule {}
