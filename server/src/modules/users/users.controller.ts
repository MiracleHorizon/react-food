import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common'

import { UsersService } from './users.service'
import { JwtAuthGuard } from '../auth/jwt.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public getUser(@Param('id') id: string, @Req() req) {
    return this.usersService.getUser(id, req)
  }

  @Get()
  public getAllUsers() {
    return this.usersService.getAllUsers()
  }
}
