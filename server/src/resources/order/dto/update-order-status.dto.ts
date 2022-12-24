import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import type { EnumOrderStatusFieldUpdateOperationsInput } from 'prisma'

import { OrderStatus } from '@/models/order/OrderStatus'

export class UpdateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(OrderStatus)
  public status: OrderStatus | EnumOrderStatusFieldUpdateOperationsInput
}
