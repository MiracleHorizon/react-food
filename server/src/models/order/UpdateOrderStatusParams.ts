import { UpdateOrderStatusDto } from '@/resources/order/dto/update-order-status.dto'
import type { Res } from '@/models/Res'

export interface UpdateOrderStatusParams extends UpdateOrderStatusDto, Res {
  userId: string
  orderId: string
}
