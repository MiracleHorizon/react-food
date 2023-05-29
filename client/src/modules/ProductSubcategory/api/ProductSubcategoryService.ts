import { BaseService } from '@api/BaseService'

import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'

class ProductSubcategoryService extends BaseService {
  constructor(endpoint: string) {
    super({ endpoint })
  }

  public async fetchOneSubcategory(
    subcategoryId: string
  ): Promise<ProductSubcategoryModel> {
    try {
      const { data } = await this.api.get<ProductSubcategoryModel>(
        subcategoryId
      )
      return data
    } catch (e) {
      throw e
    }
  }

  public fetchAllSubcategoriesByCategory() {}
}

export const productSubcategoryService = new ProductSubcategoryService(
  'product_subcategory'
)
