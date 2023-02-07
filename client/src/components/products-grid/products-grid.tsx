import type { FC } from 'react'

import { ProductCardVariant } from '@/components/product-card'
import type { ShowcaseProductModel } from '@/entities/product'
import * as Grid from './products-grid.styled'

const ProductsGrid: FC<Props> = ({ products }) => (
  <Grid.Root>
    {products.map((product, index) => (
      <Grid.ProductCard
        key={product.id}
        variant={ProductCardVariant.DEFAULT}
        index={index}
        {...product}
      />
    ))}
  </Grid.Root>
)

export default ProductsGrid

interface Props {
  products: ShowcaseProductModel[]
}
