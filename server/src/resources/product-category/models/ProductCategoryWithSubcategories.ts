import type { ProductCategory, ProductSubcategory } from '@prisma/client'

export interface ProductCategoryWithSubcategories extends ProductCategory {
  subcategories: ProductSubcategory[]
}
