import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'

export type NavigationCategory = Omit<
  ProductCategoryModel,
  'subcategories' | 'description'
>
