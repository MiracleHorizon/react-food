import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'
import type { DeliveryAddressesServiceModel } from './types'

class DeliveryAddressesService
  extends AxiosService
  implements DeliveryAddressesServiceModel
{
  constructor(endpoint: ApiEndpoint) {
    super({
      endpoint,
      withCredentials: true
    })
  }

  public async createDeliveryAddress(
    deliveryAddress: DeliveryAddress
  ): Promise<DeliveryAddress> {
    try {
      const { data } = await this.api.post<DeliveryAddress>('', deliveryAddress)

      return data
    } catch (err) {
      throw err
    }
  }

  public async fetchAllUserAddresses(): Promise<DeliveryAddress[]> {
    try {
      const { data } = await this.api.get<DeliveryAddress[]>('/all/user')

      return data
    } catch (err) {
      console.log(err)

      return []
    }
  }

  public async removeDeliveryAddress(deliveryAddressId: string): Promise<void> {
    try {
      await this.api.delete<void>(deliveryAddressId)
    } catch (err) {
      throw err
    }
  }
}

export const deliveryAddressesService = new DeliveryAddressesService(
  ApiEndpoint.DELIVERY_ADDRESS
)
