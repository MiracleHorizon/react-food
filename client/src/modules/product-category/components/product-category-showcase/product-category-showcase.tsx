import type { FC } from 'react'

import ProductSubcategorySection from './product-subcategory-section'
import type { ProductCategoryModel } from '@modules/product-category'

const ProductCategoryShowcase: FC<ProductCategoryModel> = productCategory => (
  <div>
    {productCategory.subcategories.map(subcategory => (
      <ProductSubcategorySection key={subcategory.id} {...subcategory} />
    ))}
  </div>
)

export default ProductCategoryShowcase
