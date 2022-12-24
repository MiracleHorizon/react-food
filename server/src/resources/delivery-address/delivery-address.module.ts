import { Module } from '@nestjs/common'

import { DeliveryAddressController } from './delivery-address.controller'
import { DeliveryAddressService } from './delivery-address.service'

@Module({
  controllers: [DeliveryAddressController],
  providers: [DeliveryAddressService]
})
export class DeliveryAddressModule {}
