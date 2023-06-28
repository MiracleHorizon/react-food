import { BaseService } from '@api/BaseService'
import type { PaginationParams } from '@app-types/PaginationParams'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'

class ProductCategoriesService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async fetchOneCategory(
    categoryId: string
  ): Promise<ProductCategoryModel> {
    try {
      const url = this.url + '/' + categoryId
      const response = await fetch(url)

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async fetchAllCategories({
    skip,
    take
  }: PaginationParams): Promise<ShowcaseProductCategoryModel[]> {
    try {
      const url = new URL('', this.url)
      url.searchParams.set('skip', skip.toString())
      url.searchParams.set('take', take.toString())
      const response = await fetch(url)

      return response.json()
    } catch (e) {
      throw e
    }
  }
}

export const productCategoriesService = new ProductCategoriesService(
  'product_categories'
)
