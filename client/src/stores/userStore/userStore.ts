import { create } from 'zustand'

import type { UserStore } from './userStore.types'

export const useUserStore = create<UserStore>((set, get) => ({
  // State
  user: null,

  // Computed
  isAuth: () => Boolean(get().user),

  // Actions
  signin: user => set({ user }),
  signout: () => set({ user: null })
}))
