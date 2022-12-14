import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { PrismaModule } from 'prisma/prisma.module'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [PrismaModule, JwtModule, PassportModule]
})
export class AuthModule {}
