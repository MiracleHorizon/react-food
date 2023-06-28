import type { FC } from 'react'

import ProductsGrid from '@components/products/ProductsGrid'
import { Routes } from '@router/Routes.enum'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import * as Section from './ProductSubcategorySection.styled'

const ProductSubcategorySection: FC<ProductSubcategoryModel> = ({
  id,
  title,
  categoryId,
  products
}) => (
  <Section.Root>
    <Section.Title href={`${Routes.CATEGORY}/${categoryId}?subcategory=${id}`}>
      {title}
    </Section.Title>
    <ProductsGrid products={products} />
  </Section.Root>
)

export default ProductSubcategorySection
