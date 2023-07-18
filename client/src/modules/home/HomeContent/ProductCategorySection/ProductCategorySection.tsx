import type { FC } from 'react'

import { ProductCategoryHeader } from './ProductCategoryHeader'
import { ProductCategoryContent } from './ProductCategoryContent'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'
import { Root } from './ProductCategorySection.styled'

export const ProductCategorySection: FC<
  ShowcaseProductCategoryModel
> = productCategory => (
  <Root>
    <ProductCategoryHeader {...productCategory} />
    <ProductCategoryContent {...productCategory} />
  </Root>
)
