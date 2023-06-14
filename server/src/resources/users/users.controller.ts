import { Controller, Get, Param } from '@nestjs/common'

import { UsersService } from './users.service'
import type { UserToClient } from '@resources/users/models/UserToClient'
import type { User } from '@prisma/client'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id)
  }

  @Get()
  public findAll(): Promise<UserToClient[]> {
    return this.usersService.findAll()
  }
}
