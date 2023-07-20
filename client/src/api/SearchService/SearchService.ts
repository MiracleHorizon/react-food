import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import type { SearchServiceModel } from './types'
import type { AddressLocation } from '@models/user/AddressLocation'

class SearchService extends AxiosService implements SearchServiceModel {
  constructor(endpoint: ApiEndpoint) {
    super({ endpoint })
  }

  public async searchProducts(query: string): Promise<ShowcaseProductModel[]> {
    try {
      const { data } = await this.api.get<ShowcaseProductModel[]>('products', {
        params: {
          query
        }
      })

      return data
    } catch (err) {
      throw err
    }
  }

  // TODO: Pagination
  public async searchAddressesLocations(
    query: string
  ): Promise<AddressLocation[]> {
    try {
      const { data } = await this.api.get<AddressLocation[]>(
        'addresses_locations',
        {
          params: {
            query
          }
        }
      )

      return data
    } catch (err) {
      throw err
    }
  }
}

export const searchService = new SearchService(ApiEndpoint.SEARCH)
