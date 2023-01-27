import type { FC } from 'react'

import * as Price from './product-card-price.styled'

const ProductCardPrice: FC<Props> = ({ price, fullPrice, withDiscount }) => (
  <div>
    {withDiscount ? (
      <Price.DiscountLabel>
        <Price.DiscountPrice>{price}</Price.DiscountPrice>
        <Price.ThroughFullPrice>{fullPrice}</Price.ThroughFullPrice>
      </Price.DiscountLabel>
    ) : (
      <Price.Price>{price}</Price.Price>
    )}
  </div>
)

export default ProductCardPrice

interface Props {
  price: string
  fullPrice: string
  withDiscount: boolean
}
