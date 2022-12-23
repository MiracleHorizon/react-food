import { CreateOrderDto } from '@/resources/order/dto/create-order.dto'
import type { Res } from '@/models/Res'

export interface CreateOrderParams extends CreateOrderDto, Res {
  userId: string
}
