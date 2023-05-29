import type { OrderStatus } from './OrderStatus'
import type { OrderProductModel } from './OrderProduct'

export interface OrderModel {
  id: string
  userId: string
  cutleryCount: number
  deliveryAddress: string
  totalCost: number
  productsCost: number
  deliveryCost: number
  serviceFee: number
  status: OrderStatus
  createdAt: Date
  updatedAt: Date
  deliveredAt: Date
  recipientPhoneNumber: string
  products: OrderProductModel[]
  commentary?: string // TODO: | null
}
