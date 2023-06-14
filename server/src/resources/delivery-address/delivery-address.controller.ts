import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common'
import type { Response } from 'express'
import { Request } from 'express'

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
    @Req() req: Request,
    @Res() res: Response
  ): Promise<void> {
    const userPayload = req.user as JwtPayload
    return this.addressService.create({
      userId: userPayload.sub,
      res,
      ...dto
    })
  }

  @Get(':userId/all')
  public findAllUserAddresses(
    @Param('userId') userId: string
  ): Promise<DeliveryAddress[]> {
    return this.addressService.findAllUserAddresses(userId)
  }

  @Delete(':id')
  public removeOne(
    @Param('id') id: string,
    @Res() res: Response
  ): Promise<void> {
    return this.addressService.removeOne(id, res)
  }

  @Delete(':userId/all')
  public removeAllUserAddresses(
    @Param('userId') userId: string,
    @Res() res: Response
  ): Promise<void> {
    return this.addressService.removeAllUserAddresses(userId, res)
  }
}
