import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { ProductModule } from './modules/product/product.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    ProductModule
  ]
})
export class AppModule {}
