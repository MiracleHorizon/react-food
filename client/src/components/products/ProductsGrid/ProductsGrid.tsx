import type { FC } from 'react'

import { ShowcaseProductCardVariant } from '@components/products/ShowcaseProductCard'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import * as Grid from './ProductsGrid.styled'

const ProductsGrid: FC<Props> = ({ products }) => (
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

export default ProductsGrid

interface Props {
  products: ShowcaseProductModel[]
}
