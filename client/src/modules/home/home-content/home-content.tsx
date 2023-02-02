import type { FC } from 'react'

import PageDescription from './home-description'
import ProductCategorySection from './category-section'
import type { ProductCategoryModel } from '@/modules/product-category'
import StyledWrapper from './home-content.styled'

const HomeContent: FC<Props> = ({ productCategories }) => {
  return (
    <StyledWrapper>
      <PageDescription />
      {productCategories.map(productCategory => (
        <ProductCategorySection key={productCategory.id} {...productCategory} />
      ))}
    </StyledWrapper>
  )
}

export default HomeContent

interface Props {
  productCategories: ProductCategoryModel[]
}
