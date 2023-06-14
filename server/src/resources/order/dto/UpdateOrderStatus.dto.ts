import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { EnumOrderStatusFieldUpdateOperationsInput } from 'prisma'

import { OrderStatus } from '../models/OrderStatus'

export class UpdateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(OrderStatus)
  public status: OrderStatus | EnumOrderStatusFieldUpdateOperationsInput
}
