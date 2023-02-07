import { BaseService } from '@/api/base-service'
import type { ProductSubcategoryModel } from '@/modules/product-category'

class ProductSubcategoryService extends BaseService {
  constructor() {
    super('product_subcategory')
  }

  public async fetchOne(id: string): Promise<ProductSubcategoryModel> {
    try {
      const { data } = await this.api.get(id)

      return data
    } catch (e) {
      throw e
    }
  }
}

export const productSubcategoryService = new ProductSubcategoryService()
