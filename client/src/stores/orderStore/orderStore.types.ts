import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'

export type OrderStore = State & Computed & Action

interface State {
  deliveryAddressDetails: DeliveryAddressDetailsForOrder | null
}

interface Computed {
  withBonusCoins: () => boolean
}

interface Action {
  setDeliveryAddressDetails: (data: DeliveryAddressDetailsForOrder) => void
  reset: VoidFunction
}
