import type { FC } from 'react'

import SectionHeader from './category-section-header'
import SectionContent from './category-section-content'
import type { ShowcaseProductCategoryModel } from '@/modules/product-category'
import { animation, StyledSection } from './category-section.styled'

const ProductCategorySection: FC<Props> = ({ index, ...productCategory }) => (
  <StyledSection
    initial='visible'
    whileInView='visible'
    viewport={{ once: true }}
    variants={animation}
    custom={index}
  >
    <SectionHeader {...productCategory} />
    <SectionContent
      id={productCategory.id}
      products={productCategory.products.slice(0, 20)}
    />
  </StyledSection>
)

export default ProductCategorySection

interface Props extends ShowcaseProductCategoryModel {
  index: number
}
