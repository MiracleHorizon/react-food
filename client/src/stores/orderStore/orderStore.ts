import { create } from 'zustand'

import type { OrderStore } from './orderStore.types'

export const useOrderStore = create<OrderStore>(() => ({
  // State
  withBonusCoins: () => false
}))
