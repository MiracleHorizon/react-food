import { Module } from '@nestjs/common'

import { BillingCardService } from './billing-card.service'
import { BillingCardController } from './billing-card.controller'

@Module({
  controllers: [BillingCardController],
  providers: [BillingCardService]
})
export class BillingCardModule {}
