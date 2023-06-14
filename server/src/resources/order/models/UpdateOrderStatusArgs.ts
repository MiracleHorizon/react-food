import type { Res } from '@models/Res'
import type { UpdateOrderStatusDto } from '../dto/UpdateOrderStatus.dto'

export interface UpdateOrderStatusArgs extends UpdateOrderStatusDto, Res {
  userId: string
  orderId: string
}
