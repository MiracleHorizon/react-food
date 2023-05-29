import { type FC, memo } from 'react'

import ProductItemContent from './ProductItemContent'
import type { CartProductHocComponentProps } from '@hoc/withCartProduct'
import * as Item from './ProductItem.styled'

const ProductItem: FC<CartProductHocComponentProps> = ({
  title,
  image,
  count,
  formattedWeight,
  actions,
  price: { withDiscount, formattedFullPrice, formattedTotalPrice },
  className
}) => (
  <Item.Root className={className}>
    <ProductItemContent
      title={title}
      image={image}
      withDiscount={withDiscount}
      formattedWeight={formattedWeight}
      formattedTotalPrice={formattedTotalPrice}
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

export default memo(ProductItem)
