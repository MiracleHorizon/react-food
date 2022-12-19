import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'

import { CreateAddressDto } from '@/modules/address/dto/create-address.dto'
import { AddressService } from '@/modules/address/address.service'

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post(':userId')
  public create(
    @Param('userId') userId: string,
    @Body() dto: CreateAddressDto
  ) {
    return this.addressService.create(userId, dto)
  }

  @Get(':userId/all')
  public getAllUserAddresses(@Param('userId') userId: string) {
    return this.addressService.getAllUserAddresses(userId)
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.addressService.delete(id)
  }

  @Delete(':userId/all')
  public deleteAllUserAddresses(@Param('userId') userId: string) {
    return this.addressService.deleteAllUserAddresses(userId)
  }
}
