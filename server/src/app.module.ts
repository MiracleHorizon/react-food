import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from '@resources/auth/auth.module'
import { UsersModule } from '@resources/users/users.module'
import { CartModule } from '@resources/cart/cart.module'
import { OrderModule } from '@resources/order/order.module'
import { ProductCategoriesModule } from '@resources/product-categories/product-categories.module'
import { ProductSubcategoriesModule } from '@resources/product-subcategories/product-subcategories.module'
import { ProductModule } from '@resources/product/product.module'
import { EnvironmentModule } from '@resources/environment/environment.module'
import { DeliveryAddressModule } from '@resources/delivery-address/delivery-address.module'
import { BillingCardModule } from '@resources/billing-card/billing-card.module'
import { SearchModule } from '@resources/search/search.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    CartModule,
    OrderModule,
    DeliveryAddressModule,
    BillingCardModule,
    ProductCategoriesModule,
    ProductSubcategoriesModule,
    ProductModule,
    EnvironmentModule,
    SearchModule
  ]
})
export class AppModule {}
