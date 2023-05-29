import { BaseService } from '@api/BaseService'
import type { PaginationParams } from '@app-types/PaginationParams'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'

class ProductCategoriesService extends BaseService {
  constructor(endpoint: string) {
    super({ endpoint })
  }

  public async fetchOneCategory(
    categoryId: string
  ): Promise<ProductCategoryModel> {
    try {
      const { data } = await this.api.get<ProductCategoryModel>(categoryId)
      return data
    } catch (e) {
      throw e
    }
  }

  public async fetchAllCategories(
    paginationParams: PaginationParams
  ): Promise<ShowcaseProductCategoryModel[]> {
    try {
      const { data } = await this.api.get<ShowcaseProductCategoryModel[]>('', {
        params: paginationParams
      })
      return data
    } catch (e) {
      throw e
    }
  }
}

export const productCategoriesService = new ProductCategoriesService(
  'product_category'
)
