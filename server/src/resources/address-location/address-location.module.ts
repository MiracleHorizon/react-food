import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { AddressLocationService } from './address-location.service'
import { AddressLocationController } from './address-location.controller'

@Module({
  controllers: [AddressLocationController],
  providers: [AddressLocationService, PrismaService]
})
export class AddressLocationModule {}
