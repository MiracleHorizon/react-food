import { FC } from 'react'

import ProductCardImage from './Image'
import ProductCardInfo from './Info'
import ProductCardFooter from './Footer'
import { IProduct } from '@/models/IProduct'
import * as Card from './ProductCard.styles'

// TODO: Решить проблему со шрифтом.
const ProductCard: FC<IProduct> = ({ id, title, price, weight, imageUrl }) => (
  <Card.Root>
    <Card.Content>
      <ProductCardImage imageUrl={imageUrl} title={title} />
      <ProductCardInfo title={title} price={price} weight={weight} />
      <ProductCardFooter id={id} weight={weight} />
    </Card.Content>
  </Card.Root>
)

export default ProductCard
