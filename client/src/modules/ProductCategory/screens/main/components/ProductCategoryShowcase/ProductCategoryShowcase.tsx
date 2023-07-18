import type { FC } from 'react'

import { ProductSubcategorySection } from './ProductSubcategorySection'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'

export const ProductCategoryShowcase: FC<
  ProductCategoryModel
> = productCategory => (
  <div>
    {productCategory.subcategories.map(subcategory => (
      <ProductSubcategorySection key={subcategory.id} {...subcategory} />
    ))}
  </div>
)
