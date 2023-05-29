import { create } from 'zustand'

import type { CutleryStore } from './cutleryStore.types'

export const useCutleryStore = create<CutleryStore>((set, get) => ({
  // State
  count: 0,
  countRestriction: 4,

  // Computed
  isAdded: () => get().count > 0,
  isMaxCount: () => get().count === get().countRestriction,

  // Actions
  addCutlery: () => set({ count: 1 }),
  incrementCount: () => {
    const count = get().count
    if (count + 1 > get().countRestriction) return
    set({ count: count + 1 })
  },
  decrementCount: () => {
    const count = get().count
    if (count === 0) return
    set({ count: count - 1 })
  }
}))
