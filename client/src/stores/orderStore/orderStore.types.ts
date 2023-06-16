import type { DeliveryAddressFormData } from '@modules/Cart/CartContent/DeliverySection/DeliveryAddressForm/DeliveryAddressForm.types'

export type OrderStore = State & Computed & Action

interface State {
  deliveryAddress: DeliveryAddressFormData | null
}

interface Computed {
  withBonusCoins: () => boolean
}

interface Action {
  setDeliveryAddress: (data: DeliveryAddressFormData) => void
}
