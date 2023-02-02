import { BaseService } from '@/api/base-service'
import type { ProductCategoryModel } from '@/modules/product-category'
import type { PaginationParams } from '@/api/models/pagination-params.model'
import type { NavigationCategory } from '@/models/navigation-category'

class ProductCategoryService extends BaseService {
  constructor() {
    super('product_category')
  }

  public async fetchOneCategory(id: string): Promise<ProductCategoryModel> {
    try {
      const { data } = await this.api.get<ProductCategoryModel>(id)

      return data
    } catch (e) {
      throw e
    }
  }

  public async fetchAllCategories(
    paginationParams: PaginationParams
  ): Promise<ProductCategoryModel[]> {
    try {
      const { data } = await this.api.get('', {
        params: paginationParams
      })

      return data
    } catch (e) {
      throw e
    }
  }

  public async fetchNavCategories(): Promise<NavigationCategory[]> {
    try {
      const url = '/navigation/all'
      const { data } = await this.api.get<NavigationCategory[]>(url)

      return data
    } catch (e) {
      throw e
    }
  }
}

export const productCategoryService = new ProductCategoryService()
