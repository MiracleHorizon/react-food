import { create } from 'zustand'

import type { OrderStore } from './orderStore.types'

export const useOrderStore = create<OrderStore>(set => ({
  // State
  deliveryAddressDetails: null,

  // Computed
  withBonusCoins: () => false,

  // Actions
  setDeliveryAddressDetails: data => set({ deliveryAddressDetails: data }),
  reset: () => set({ deliveryAddressDetails: null })
}))
