import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import type { ProductSubcategoriesServiceModel } from './types'

class ProductSubcategoriesService
  extends AxiosService
  implements ProductSubcategoriesServiceModel
{
  constructor(endpoint: ApiEndpoint) {
    super({ endpoint })
  }

  public async fetchOneSubcategory(
    subcategoryId: string
  ): Promise<ProductSubcategoryModel> {
    try {
      const { data } = await this.api<ProductSubcategoryModel>(subcategoryId)

      return data
    } catch (err) {
      throw err
    }
  }
}

export const productSubcategoriesService = new ProductSubcategoriesService(
  ApiEndpoint.PRODUCT_SUBCATEGORIES
)
