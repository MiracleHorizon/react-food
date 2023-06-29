import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { PaginationParams } from '@app-types/PaginationParams'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'
import type { ProductCategoriesServiceModel } from './types'

class ProductCategoriesService
  extends AxiosService
  implements ProductCategoriesServiceModel
{
  constructor(endpoint: ApiEndpoint) {
    super({ endpoint })
  }

  public async fetchOneCategory(
    categoryId: string
  ): Promise<ProductCategoryModel> {
    try {
      const { data } = await this.api<ProductCategoryModel>(categoryId)

      return data
    } catch (err) {
      throw err
    }
  }

  public async fetchAllCategories(
    paginationParams: PaginationParams
  ): Promise<ShowcaseProductCategoryModel[]> {
    try {
      const { data } = await this.api<ShowcaseProductCategoryModel[]>('', {
        params: paginationParams
      })

      return data
    } catch (err) {
      throw err
    }
  }
}

export const productCategoriesService = new ProductCategoriesService(
  ApiEndpoint.PRODUCT_CATEGORIES
)
