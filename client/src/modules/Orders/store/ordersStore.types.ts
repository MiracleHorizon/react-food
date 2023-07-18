import type { OrderModel } from '../models/Order'

export type OrdersStore = State & Computed & Actions

interface State {
  orders: OrderModel[]
  selectedOrder: OrderModel | null
}

interface Computed {
  isOrderSelected: (orderId: string) => boolean
}

interface Actions {
  initialize: (orders: OrderModel[]) => void
  selectOrder: (order: OrderModel) => void
}
