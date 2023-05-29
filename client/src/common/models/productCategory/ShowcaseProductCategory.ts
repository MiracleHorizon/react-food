import type { ProductCategoryModel } from './ProductCategory'
import type { ShowcaseProductModel } from '../product/ShowcaseProduct'

export interface ShowcaseProductCategoryModel
  extends Omit<ProductCategoryModel, 'subcategories'> {
  products: ShowcaseProductModel[]
}
