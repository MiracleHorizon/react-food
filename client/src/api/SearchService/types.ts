import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import type { AddressLocation } from '@models/user/AddressLocation'

export interface SearchServiceModel {
  searchProducts(query: string): Promise<ShowcaseProductModel[]>
  searchAddressesLocations(query: string): Promise<AddressLocation[]>
}
