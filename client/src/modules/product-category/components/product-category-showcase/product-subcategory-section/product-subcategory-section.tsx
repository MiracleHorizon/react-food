import { FC, memo } from 'react'

import ProductsGrid from '@components/products-grid'
import type { ProductSubcategoryModel } from '@modules/product-category'
import * as Section from './product-subcategory-section.styled'

const ProductSubcategorySection: FC<ProductSubcategoryModel> = ({
  id,
  title,
  products,
  categoryId
}) => (
  <Section.Root>
    <Section.TitleLink href={`/category/${categoryId}/subcategory/${id}`}>
      {title}
    </Section.TitleLink>
    <ProductsGrid products={products} />
  </Section.Root>
)

export default memo(ProductSubcategorySection)
