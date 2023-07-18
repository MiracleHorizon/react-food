import { create } from 'zustand'

import type { OrdersStore } from './ordersStore.types'

export const useOrdersStore = create<OrdersStore>((set, get) => ({
  // State
  orders: [],
  selectedOrder: null,

  // Computed
  isOrderSelected: orderId => get().selectedOrder?.id === orderId,

  // Actions
  initialize: orders =>
    set({
      orders,
      selectedOrder: orders[0] ?? null
    }),
  selectOrder: order => {
    const selectedOrder = get().selectedOrder
    if (selectedOrder && selectedOrder.id !== order.id) {
      set({ selectedOrder: order })
    }
  }
}))
