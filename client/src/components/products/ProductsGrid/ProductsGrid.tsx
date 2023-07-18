import type { FC } from 'react'

import { ShowcaseProductCardVariant } from '@components/products/ShowcaseProductCard'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import * as Grid from './ProductsGrid.styled'

export const ProductsGrid: FC<Props> = ({ products }) => (
  <Grid.Root>
    {products.map(product => (
      <Grid.Card
        key={product.id}
        variant={ShowcaseProductCardVariant.DEFAULT}
        {...product}
      />
    ))}
  </Grid.Root>
)

interface Props {
  products: ShowcaseProductModel[]
}
