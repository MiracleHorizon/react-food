import type { OrderModel } from '../models/Order'

export interface OrdersStore {
  orders: OrderModel[]
  selectedOrder: OrderModel | null
  isOrderSelected: (orderId: string) => boolean
  initialize: (orders: OrderModel[]) => void
  selectOrder: (order: OrderModel) => void
}
