import type { FC } from 'react'

import type { ProductModel } from '@/entities/product'
import * as Content from './product-card-content.styled'

const ProductCardContent: FC<Props> = ({ title, price, weight }) => (
  <Content.Root>
    <Content.Container>
      <Content.Price>{price}</Content.Price>
      <Content.Title>{title}</Content.Title>
    </Content.Container>
    <Content.Weight>{weight}</Content.Weight>
  </Content.Root>
)

export default ProductCardContent

type Props = Pick<ProductModel, 'title'> & {
  weight: string
  price: string
}
