import type { Res } from '@models/Res'

export interface DeleteBillingCardArgs extends Res {
  cardId: string
  userId: string
}
