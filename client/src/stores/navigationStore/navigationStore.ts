import { create } from 'zustand'

import type { NavigationStore } from './navigationStore.types'

export const useNavigationStore = create<NavigationStore>((set, get) => ({
  // State
  categories: [],

  // Computed
  isEmpty: () => get().categories.length === 0,

  // Actions
  setCategories: categories => set({ categories })
}))
