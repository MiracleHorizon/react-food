import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { PrismaService } from 'prisma/prisma.service'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies'

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
