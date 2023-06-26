import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards
} from '@nestjs/common'
import type { Request } from 'express'

import { JwtGuard } from '@common/guards'
import { DeliveryAddressService } from './delivery-address.service'
import type { DeliveryAddress } from '@prisma/client'
import type { JwtPayload } from '@resources/auth/models'
import type { CreateDeliveryAddressDto } from './dto/CreateDeliveryAddress.dto'

@Controller('delivery_address')
export class DeliveryAddressController {
  constructor(private readonly addressService: DeliveryAddressService) {}

  @UseGuards(JwtGuard)
  @Post()
  public create(
    @Body() dto: CreateDeliveryAddressDto,
    @Req() req: Request
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.addressService.create({
      userId: userPayload.sub,
      ...dto
    })
  }

  @UseGuards(JwtGuard)
  @Get('all/user')
  public findAllUserAddresses(@Req() req: Request): Promise<DeliveryAddress[]> {
    const userPayload = req.user as JwtPayload
    return this.addressService.findAllUserAddresses(userPayload.sub)
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  public removeOne(
    @Param('id') id: string,
    @Req() req: Request
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.addressService.removeOne(id, userPayload.sub)
  }
}
