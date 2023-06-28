import { BaseService } from '@api/BaseService'

import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'

class ProductSubcategoriesService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async fetchOneSubcategory(
    subcategoryId: string
  ): Promise<ProductSubcategoryModel> {
    try {
      const url = this.url + '/' + subcategoryId
      const response = await fetch(url)

      return response.json()
    } catch (err) {
      throw err
    }
  }
}

export const productSubcategoriesService = new ProductSubcategoriesService(
  'product_subcategories'
)
