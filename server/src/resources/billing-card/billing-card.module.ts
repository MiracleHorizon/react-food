import { Module } from '@nestjs/common'

import { PrismaService } from 'prisma/prisma.service'
import { BillingCardService } from './billing-card.service'
import { BillingCardController } from './billing-card.controller'

@Module({
  controllers: [BillingCardController],
  providers: [BillingCardService, PrismaService]
})
export class BillingCardModule {}
