import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies'
import { PrismaService } from '../../../prisma/prisma.service'

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    AuthService,
    RefreshTokenStrategy,
    AccessTokenStrategy,
    PrismaService
  ]
})
export class AuthModule {}
