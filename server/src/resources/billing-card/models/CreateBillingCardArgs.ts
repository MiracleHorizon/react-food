import type { Res } from '@models/Res'
import type { CreateBillingCardDto } from '../dto/CreateBillingCard.dto'

export interface CreateBillingCardArgs extends CreateBillingCardDto, Res {
  // TODO: number[]
  userId: string
}
