import { create } from 'zustand'

import type { ModalsStore } from './modalsStore.types'

export const useModalsStore = create<ModalsStore>(set => ({
  // State
  isPersonalModalOpen: false,

  // Actions
  openPersonalDataModal: () => set({ isPersonalModalOpen: true }),
  closePersonalDataModal: () => set({ isPersonalModalOpen: false })
}))
