import type { PaginationParams } from '@models/PaginationParams'

export interface SearchAddressesLocationsArgs extends PaginationParams {
  query: string
}
