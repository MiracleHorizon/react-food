import type { PaginationParams } from '@app-types/PaginationParams'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'

export interface ProductCategoriesServiceModel {
  fetchOneCategory(categoryId: string): Promise<ProductCategoryModel>
  fetchAllCategories(
    paginationParams: PaginationParams
  ): Promise<ShowcaseProductCategoryModel[]>
}
