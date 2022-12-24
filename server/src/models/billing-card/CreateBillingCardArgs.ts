import { CreateBillingCardDto } from '@/resources/billing-card/dto/create-billing-card.dto'
import type { Res } from '@/models/Res'

export interface CreateBillingCardArgs extends CreateBillingCardDto, Res {
  // TODO number[]
  userId: string
}
