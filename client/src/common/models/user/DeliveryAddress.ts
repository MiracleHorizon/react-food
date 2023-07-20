import type { DeliveryAddressDetails } from '@models/user/DeliveryAddressDetails'
import type { AddressLocation } from '@models/user/AddressLocation'

export interface DeliveryAddress
  extends Omit<AddressLocation, 'id'>,
    DeliveryAddressDetails {
  id: string
}
