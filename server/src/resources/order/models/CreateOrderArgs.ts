import type { CreateOrderDto } from '../dto/CreateOrder.dto'

export interface CreateOrderArgs extends CreateOrderDto {
  userId: string
}
