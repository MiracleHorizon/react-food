import { BaseService } from '@/api/base-service'
import type {
  ProductCategoryModel,
  ShowcaseProductCategoryModel
} from '@/modules/product-category'
import type { PaginationParams } from '@/api/models/pagination-params.model'
import type { NavigationCategory } from '@/models/navigation-category'

class ProductCategoryService extends BaseService {
  constructor() {
    super('product_category')
  }

  public async fetchOne(id: string): Promise<ProductCategoryModel> {
    try {
      const { data } = await this.api.get<ProductCategoryModel>(id)

      return data
    } catch (e) {
      throw e
    }
  }

  public async fetchAll(
    paginationParams: PaginationParams
  ): Promise<ShowcaseProductCategoryModel[]> {
    try {
      const { data } = await this.api.get('', {
        params: paginationParams
      })

      return data
    } catch (e) {
      throw e
    }
  }

  public async fetchNavigation(): Promise<NavigationCategory[]> {
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
