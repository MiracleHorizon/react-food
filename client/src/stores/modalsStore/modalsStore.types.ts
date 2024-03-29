export type ModalsStore = State & Actions

interface State {
  isPersonalModalOpen: boolean
  isDeliveryAddressesModalOpen: boolean
}

interface Actions {
  openPersonalDataModal: VoidFunction
  closePersonalDataModal: VoidFunction
  openDeliveryAddressesModal: VoidFunction
  closeDeliveryAddressesModal: VoidFunction
}
