import type { Res } from '@models/Res'
import type { CreateOrderDto } from '../dto/CreateOrder.dto'

export interface CreateOrderArgs extends CreateOrderDto, Res {
  userId: string
}
