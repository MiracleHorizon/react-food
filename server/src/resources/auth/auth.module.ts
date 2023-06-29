import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { PrismaService } from 'prisma/prisma.service'
import { CartService } from '@resources/cart/cart.service'
import { ProductService } from '@resources/product/product.service'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies'

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    CartService,
    ProductService,
    PrismaService,
    AccessTokenStrategy,
    RefreshTokenStrategy
  ]
})
export class AuthModule {}
