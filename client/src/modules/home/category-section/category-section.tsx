import { FC, useMemo } from 'react'

import {
  ProductCategoryImpl,
  ProductCategoryModel
} from '@/modules/product-category'
import SectionHeader from './category-section-header'
import SectionContent from './category-section-content'
import StyledSection from './category-section.styled'

const ProductCategorySection: FC<
  ProductCategoryModel
> = productCategoryData => {
  const productCategory = useMemo(() => {
    return new ProductCategoryImpl(productCategoryData)
  }, [productCategoryData])

  return (
    <StyledSection>
      <SectionHeader {...productCategory} />
      <SectionContent
        id={productCategory.id}
        products={productCategory.getFirstProducts()}
      />
    </StyledSection>
  )
}

export default ProductCategorySection
