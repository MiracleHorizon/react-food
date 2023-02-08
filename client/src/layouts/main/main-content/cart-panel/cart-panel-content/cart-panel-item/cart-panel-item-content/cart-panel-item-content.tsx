import type { FC } from 'react'

import type { ProductModel } from '@entities/product'
import * as Content from './cart-panel-item-content.styled'

const CartPanelItemContent: FC<Props> = ({
  title,
  price,
  weight,
  fullPrice,
  withDiscount
}) => (
  <Content.Root>
    <Content.Title>{title}</Content.Title>
    <Content.Container>
      {withDiscount ? (
        <>
          <Content.DiscountPrice>{price}</Content.DiscountPrice>
          <Content.ThroughFullPrice>{fullPrice}</Content.ThroughFullPrice>
        </>
      ) : (
        <>
          <Content.Price>{price}</Content.Price>
          <Content.Dot>·</Content.Dot>
          <Content.Weight>{weight}</Content.Weight>
        </>
      )}
    </Content.Container>
  </Content.Root>
)

export default CartPanelItemContent

// TODO Pick
type Props = Pick<ProductModel, 'title'> & {
  weight: string
  price: string
  fullPrice: string
  withDiscount: boolean
}
