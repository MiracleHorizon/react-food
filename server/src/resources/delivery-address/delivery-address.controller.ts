import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common'
import type { Response } from 'express'

import { CreateDeliveryAddressDto } from './dto/create-delivery-address.dto'
import { DeliveryAddressService } from './delivery-address.service'

import { MOCK_USER_ID } from '@/utils/constants'

@Controller('delivery_address')
export class DeliveryAddressController {
  constructor(private readonly addressService: DeliveryAddressService) {}

  @Post()
  public create(@Body() dto: CreateDeliveryAddressDto, @Res() res: Response) {
    return this.addressService.create({
      userId: MOCK_USER_ID,
      res,
      ...dto
    })
  }

  @Get(':userId/all')
  public findAllUserAddresses(@Param('userId') userId: string) {
    return this.addressService.findAllUserAddresses(userId)
  }

  @Delete(':id')
  public removeOne(@Param('id') id: string, @Res() res: Response) {
    return this.addressService.removeOne(id, res)
  }

  @Delete(':userId/all')
  public removeAllUserAddresses(
    @Param('userId') userId: string,
    @Res() res: Response
  ) {
    return this.addressService.removeAllUserAddresses(userId, res)
  }
}
