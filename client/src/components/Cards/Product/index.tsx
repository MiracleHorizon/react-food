import { FC } from 'react'

import ProductCardImage from './Image'
import ProductCardInfo from './Info'
import ProductCardFooter from './Footer'
import { Product } from '@/modules/product/Product'
import * as Card from './ProductCard.styles'

const ProductCard: FC<Product> = product => {
  const { id, title, price, weight } = product

  return (
    <Card.Root>
      <Card.Content>
        <ProductCardImage imageUrl={product.getImageUrl()} title={title} />
        <ProductCardInfo title={title} price={price} weight={weight} />
        <ProductCardFooter id={id} weight={weight} />
      </Card.Content>
    </Card.Root>
  )
}

export default ProductCard
