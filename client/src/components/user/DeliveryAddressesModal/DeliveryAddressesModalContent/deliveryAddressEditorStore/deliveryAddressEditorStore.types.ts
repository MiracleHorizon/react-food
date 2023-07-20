export type DeliveryAddressEditorStore = State & Computed & Action

interface State {
  editingAddressId: string | null
}

interface Computed {
  isAnyAddressEditing: () => boolean
  isAddressEditing: (addressId: string) => boolean
}

interface Action {
  setEditingAddressId: (addressId: string) => void
  resetEditingAddressId: VoidFunction
}
