import { create } from 'zustand'

import type { UserStore } from './userStore.types'

export const useUserStore = create<UserStore>((set, get) => ({
  // State
  user: null,
  addresses: [],
  selectedAddress: null,

  // Computed
  isAuth: () => Boolean(get().user),
  isAddressesEmpty: () => get().addresses.length === 0,

  // Actions
  signin: user => set({ user }),
  signout: () => set({ user: null }),
  setAddresses: addresses => set({ addresses }),
  setSelectedAddress: address => set({ selectedAddress: address })
}))
