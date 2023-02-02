import type { FC } from 'react'

import ProductCard, { ProductCardVariant } from '@/components/product-card'
import { Routes } from '@/types/routes'
import type { ProductSubcategoryModel } from '@/modules/product-category'
import * as Section from './product-subcategory-section.styled'

const ProductSubcategorySection: FC<ProductSubcategoryModel> = ({
  id,
  title,
  products
}) => (
  <Section.Root>
    <Section.TitleLink href={`${Routes.SUBCATEGORY}/${id}`}>
      {title}
    </Section.TitleLink>
    <Section.Grid>
      {products.map(product => (
        <ProductCard
          key={product.id}
          variant={ProductCardVariant.DEFAULT}
          {...product}
        />
      ))}
    </Section.Grid>
  </Section.Root>
)

export default ProductSubcategorySection
