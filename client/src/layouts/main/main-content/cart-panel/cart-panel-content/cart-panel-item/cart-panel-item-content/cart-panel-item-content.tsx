import type { FC } from 'react'

import type { ProductModel } from '@/entities/product'
import * as Content from './cart-panel-item-content.styled'

const CartPanelItemContent: FC<Props> = ({ title, price, weight }) => (
  <Content.Root>
    <Content.Title>{title}</Content.Title>
    <Content.Container>
      <Content.Price>{price}</Content.Price>
      <Content.Dot>·</Content.Dot>
      <Content.Weight>{weight}</Content.Weight>
    </Content.Container>
  </Content.Root>
)

export default CartPanelItemContent

type Props = Pick<ProductModel, 'title'> & {
  weight: string
  price: string
}
