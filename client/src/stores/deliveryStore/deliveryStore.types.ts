import type { DeliveryInfo } from '@models/DeliveryInfo'

export interface DeliveryStore {
  deliveryInfo: DeliveryInfo | null
  deliveryCost: () => number
  initialize: (deliveryInfo: DeliveryInfo) => void
  deinitialize: VoidFunction
}
