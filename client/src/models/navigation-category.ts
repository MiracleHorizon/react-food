import type { ProductCategoryModel } from '@modules/product-category'

export type NavigationCategory = Omit<
  ProductCategoryModel,
  'subcategories' | 'description'
>
