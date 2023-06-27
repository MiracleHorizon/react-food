import axios from 'axios'

import { BaseService } from '@api/BaseService'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'

class DeliveryAddressesService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async createDeliveryAddress(
    deliveryAddress: DeliveryAddress
  ): Promise<DeliveryAddress> {
    try {
      const { data } = await axios.post<DeliveryAddress>(
        this.url,
        deliveryAddress,
        { withCredentials: true }
      )

      return data
    } catch (err) {
      throw err
    }
  }

  public async fetchAllUserAddresses(): Promise<DeliveryAddress[]> {
    try {
      const { data } = await axios.get<DeliveryAddress[]>(
        this.url + '/all/user',
        { withCredentials: true }
      )

      return data
    } catch (err) {
      return []
    }
  }

  public async removeDeliveryAddress(deliveryAddressId: string): Promise<void> {
    try {
      await axios.delete<void>(this.url + deliveryAddressId, {
        withCredentials: true
      })
    } catch (err) {
      throw err
    }
  }
}

export const deliveryAddressesService = new DeliveryAddressesService(
  'delivery_address'
)
