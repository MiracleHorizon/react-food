import { FC } from 'react'

import ProductCardImage from './image'
import ProductCardInfo from './info'
import ProductCardFooter from './footer'
import type { ProductModel } from '@/models/product/ProductModel'
import * as Card from './ProductCard.styles'

const ProductCard: FC<ProductModel> = product => {
  const { id, title, price, weight, imageUrl } = product

  return (
    <Card.Root>
      <Card.Content>
        {imageUrl && <ProductCardImage imageUrl={imageUrl} title={title} />}
        <ProductCardInfo title={title} price={price} weight={weight} />
        <ProductCardFooter id={id} weight={weight} />
      </Card.Content>
    </Card.Root>
  )
}

export default ProductCard
