import type { FC } from 'react'

import PageDescription from './home-description'
import ProductCategorySection from './category-section'
import type { ShowcaseProductCategoryModel } from '@modules/product-category'
import { StyledWrapper } from './home-content.styled'

const HomeContent: FC<Props> = ({ productCategories }) => (
  <StyledWrapper>
    <PageDescription />
    {productCategories.map((productCategory, index) => (
      <ProductCategorySection
        key={productCategory.id}
        index={index}
        {...productCategory}
      />
    ))}
  </StyledWrapper>
)

export default HomeContent

interface Props {
  productCategories: ShowcaseProductCategoryModel[]
}
