import { type FC, memo } from 'react'

import CartProductItemContent from './CartProductItemContent'
import type { CartProductHocProps } from '@hoc/withCartProduct'
import * as Item from './CartProductItem.styled'

const CartProductItem: FC<CartProductHocProps> = ({
  title,
  image,
  count,
  formattedWeight,
  price: { withDiscount, formattedFullPrice, formattedTotalPrice },
  actions,
  className
}) => (
  <Item.Root className={className}>
    <CartProductItemContent
      title={title}
      imagePath={image}
      formattedWeight={formattedWeight}
      withDiscount={withDiscount}
    />
    <Item.RightSide>
      <Item.ChangeCountLabel value={count} {...actions} />
      <Item.PriceLabel>
        {withDiscount && (
          <Item.ThroughFullPrice>{formattedFullPrice}</Item.ThroughFullPrice>
        )}
        <Item.Price>{formattedTotalPrice}</Item.Price>
      </Item.PriceLabel>
    </Item.RightSide>
  </Item.Root>
)

export default memo(CartProductItem)
