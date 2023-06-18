import type { DeliveryAddressDetails } from '@models/user/DeliveryAddressDetails'
import type { DeliveryAddressLocation } from '@models/user/DeliveryAddressLocation'

export interface DeliveryAddress
  extends DeliveryAddressLocation,
    DeliveryAddressDetails {
  id: string
}
