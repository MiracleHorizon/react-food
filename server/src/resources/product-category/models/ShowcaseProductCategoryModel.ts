import type { Product } from '@prisma/client'

import type { ProductCategoryWithSubcategories } from './ProductCategoryWithSubcategories'

export interface ShowcaseProductCategoryModel
  extends Omit<ProductCategoryWithSubcategories, 'subcategories'> {
  products: Product[]
}
