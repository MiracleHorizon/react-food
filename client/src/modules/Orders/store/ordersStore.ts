import { create } from 'zustand'

import type { OrdersStore } from './ordersStore.types'

export const useOrdersStore = create<OrdersStore>((setState, getState) => ({
  orders: [],
  selectedOrder: null,
  isOrderSelected: orderId => {
    const selectedOrder = getState().selectedOrder
    if (!selectedOrder) return false
    return selectedOrder.id === orderId
  },
  initialize: orders =>
    setState({
      orders,
      selectedOrder: orders[0] ?? null
    }),
  selectOrder: order => {
    const selectedOrder = getState().selectedOrder
    if (selectedOrder && selectedOrder.id !== order.id) {
      setState({
        selectedOrder: order
      })
    }
  }
}))
