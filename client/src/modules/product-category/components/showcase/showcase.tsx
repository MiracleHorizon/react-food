import { FC, useMemo } from 'react'

import ProductSubcategorySection from './product-subcategory-section'
import {
  ProductCategoryImpl,
  ProductCategoryModel
} from '@/modules/product-category'

const Showcase: FC<ProductCategoryModel> = productCategoryData => {
  const productCategory = useMemo(() => {
    return new ProductCategoryImpl(productCategoryData)
  }, [productCategoryData])

  return (
    <div>
      {productCategory.subcategories.map(subcategory => (
        <ProductSubcategorySection key={subcategory.id} {...subcategory} />
      ))}
    </div>
  )
}

export default Showcase
