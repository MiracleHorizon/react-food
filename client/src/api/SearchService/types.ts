import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'

export interface SearchServiceModel {
  searchProducts(query: string): Promise<ShowcaseProductModel[]>
}
