import { create } from 'zustand'

import type { DeliveryAddressEditorStore } from './deliveryAddressEditorStore.types'

export const useDeliveryAddressEditorStore = create<DeliveryAddressEditorStore>(
  (set, get) => ({
    // State
    editingAddressId: null,

    // Computed
    isAnyAddressEditing: () => Boolean(get().editingAddressId),
    isAddressEditing: addressId => get().editingAddressId === addressId,

    // Actions
    setEditingAddressId: addressId => set({ editingAddressId: addressId }),
    resetEditingAddressId: () => set({ editingAddressId: null })
  })
)
