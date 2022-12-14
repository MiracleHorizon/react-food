import { Module } from '@nestjs/common'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { JwtStrategy } from '../auth/jwt.strategy'

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule {}
