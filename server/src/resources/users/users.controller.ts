import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common'
import type { Request } from 'express'

import { UsersService } from './users.service'
import { JwtAuthGuard } from '../auth/jwt.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public findOne(@Param('id') id: string, @Req() req: Request) {
    return this.usersService.findOne(id, req)
  }

  @Get()
  public findAll() {
    return this.usersService.findAll()
  }
}
