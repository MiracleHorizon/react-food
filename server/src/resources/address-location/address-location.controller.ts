import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import type { Request } from 'express'

import { JwtGuard } from '@common/guards'
import { AddressLocationService } from './address-location.service'
import { CreateAddressLocationDto } from './dto/CreateAddressLocationDto'
import type { JwtPayload } from '@resources/auth/models'

// NOTE: Only admin
@Controller('address_location')
export class AddressLocationController {
  constructor(
    private readonly addressLocationService: AddressLocationService
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  public createOne(
    @Body() dto: CreateAddressLocationDto,
    @Req() req: Request
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.addressLocationService.createOne(dto, userPayload)
  }
}
