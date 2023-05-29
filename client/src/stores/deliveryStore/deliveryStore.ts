import { create } from 'zustand'

import type { DeliveryStore } from './deliveryStore.types'

export const useDeliveryStore = create<DeliveryStore>((set, get) => ({
  // State
  deliveryInfo: null,

  // Computed
  deliveryCost: () => {
    // TODO: Cringe
    const deliveryInfo = get().deliveryInfo
    if (!deliveryInfo) {
      return 0
    }
    return 0
  },

  // Actions
  initialize: deliveryInfo => set({ deliveryInfo }),
  deinitialize: () => set({ deliveryInfo: null })
}))
