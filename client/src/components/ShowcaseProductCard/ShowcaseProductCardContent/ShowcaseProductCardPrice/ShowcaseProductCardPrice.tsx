import type { FC } from 'react'

import type { MainPriceData } from '@entities/ProductPrice/ProductPrice.types'
import * as Price from './ShowcaseProductCardPrice.styled'

const ShowcaseProductCardPrice: FC<MainPriceData> = ({
  totalPrice,
  fullPrice,
  withDiscount
}) => (
  <div>
    {withDiscount ? (
      <Price.DiscountLabel>
        <Price.DiscountPrice>{totalPrice}</Price.DiscountPrice>
        <Price.ThroughFullPrice>{fullPrice}</Price.ThroughFullPrice>
      </Price.DiscountLabel>
    ) : (
      <Price.TotalPrice>{totalPrice}</Price.TotalPrice>
    )}
  </div>
)

export default ShowcaseProductCardPrice
