import type { DeliveryInfo } from '@models/DeliveryInfo'

export type DeliveryStore = State & Computed & Action

interface State {
  deliveryInfo: DeliveryInfo | null
}

interface Computed {
  deliveryCost: () => number
}

interface Action {
  initialize: (deliveryInfo: DeliveryInfo) => void
  deinitialize: VoidFunction
}
