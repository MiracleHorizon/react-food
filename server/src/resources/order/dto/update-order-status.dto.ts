import { IsNotEmpty, IsString } from 'class-validator'
import type { EnumOrderStatusFieldUpdateOperationsInput } from 'prisma'

import { OrderStatus } from '@/models/order/OrderStatus'

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  @IsString()
  public status: OrderStatus | EnumOrderStatusFieldUpdateOperationsInput
}
