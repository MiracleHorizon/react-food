import type { ProductCategoryModel } from '@modules/product-category'
import type { ShowcaseProductModel } from '@entities/product'

export interface ShowcaseProductCategoryModel
  extends Omit<ProductCategoryModel, 'subcategories'> {
  products: ShowcaseProductModel[]
}
