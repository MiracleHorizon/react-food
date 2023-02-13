import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { DeliveryAddressController } from './delivery-address.controller'
import { DeliveryAddressService } from './delivery-address.service'

@Module({
  controllers: [DeliveryAddressController],
  providers: [DeliveryAddressService, PrismaService]
})
export class DeliveryAddressModule {}
