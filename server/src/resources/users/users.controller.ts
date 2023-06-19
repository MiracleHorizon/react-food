import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards
} from '@nestjs/common'
import type { Request } from 'express'

import { JwtGuard } from '@common/guards'
import { UsersService } from './users.service'
import type { User } from '@prisma/client'
import type { JwtPayload } from '@resources/auth/models'
import type { UserToClient } from './models/UserToClient'
import type { ChangePersonalDataDto } from './dto/ChangePersonalDataDto'

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

  @UseGuards(JwtGuard)
  @Post('personal')
  public changePersonalData(
    @Req() req: Request,
    @Body() dto: ChangePersonalDataDto
  ): Promise<User> {
    const userPayload = req.user as JwtPayload
    return this.usersService.changePersonalData(userPayload.sub, dto)
  }
}
