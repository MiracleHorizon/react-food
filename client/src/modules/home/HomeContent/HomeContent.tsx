import type { FC } from 'react'

import HomeDescription from './HomeDescription'
import ProductCategorySection from './ProductCategorySection'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'
import { Root } from './HomeContent.styled'

const HomeContent: FC<Props> = ({ productCategories }) => (
  <Root>
    <HomeDescription />
    {productCategories.map(productCategory => (
      <ProductCategorySection key={productCategory.id} {...productCategory} />
    ))}
  </Root>
)

export default HomeContent

interface Props {
  productCategories: ShowcaseProductCategoryModel[]
}
