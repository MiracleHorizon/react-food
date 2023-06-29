import type { DeliveryAddress } from '@models/user/DeliveryAddress'

export interface DeliveryAddressesServiceModel {
  createDeliveryAddress(
    deliveryAddress: DeliveryAddress
  ): Promise<DeliveryAddress>
  fetchAllUserAddresses(): Promise<DeliveryAddress[]>
  removeDeliveryAddress(deliveryAddressId: string): Promise<void>
}
