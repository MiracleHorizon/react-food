import type { OrderProductModel } from './OrderProduct'

export interface OrderModel {
  id: string
  userId: string
  cutleryCount: number
  deliveryAddress: string
  // TODO: deliveryAddressString: string
  totalCost: number
  productsCost: number
  deliveryCost: number
  serviceFee: number
  createdAt: string // NOTE: Даты в формате строк
  updatedAt: string
  deliveredAt: string // NOTE: Поле deliveredAt - схематичная реализация функциональности отслеживания и изменения статуса заказа
  recipientPhoneNumber: string
  products: OrderProductModel[]
  commentary?: string // TODO: | null
}
