import { create } from 'zustand'

import type { OrderStore } from './orderStore.types'

export const useOrderStore = create<OrderStore>(set => ({
  // State
  deliveryAddress: null,

  // Computed
  withBonusCoins: () => false,

  // Action
  setDeliveryAddress: data => set({ deliveryAddress: data })
}))
