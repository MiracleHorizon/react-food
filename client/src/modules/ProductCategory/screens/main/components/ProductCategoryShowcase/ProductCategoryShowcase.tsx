import type { FC } from 'react'

import ProductSubcategorySection from './ProductSubcategorySection'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'

const ProductCategoryShowcase: FC<ProductCategoryModel> = productCategory => (
  <div>
    {productCategory.subcategories.map(subcategory => (
      <ProductSubcategorySection key={subcategory.id} {...subcategory} />
    ))}
  </div>
)

export default ProductCategoryShowcase
