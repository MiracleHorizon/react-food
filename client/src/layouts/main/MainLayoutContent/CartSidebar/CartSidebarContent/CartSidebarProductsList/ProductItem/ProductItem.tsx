import type { FC } from 'react'

import { ProductItemContent } from './ProductItemContent'
import { ChangeCountLabel } from './ChangeCountLabel'
import type { CartProductHocProps } from '@hoc/withCartProduct'
import * as Item from './ProductItem.styled'

export const ProductItem: FC<CartProductHocProps> = ({
  image,
  count,
  title,
  actions,
  formattedWeight,
  price: { withDiscount, formattedFullPrice, formattedTotalPrice }
}) => (
  <Item.Root>
    {withDiscount && <Item.DiscountBadge />}
    <Item.Image
      src={image}
      alt={title}
      width={Item.imageSize}
      height={Item.imageSize}
      priority
    />
    <ProductItemContent
      title={title}
      formattedWeight={formattedWeight}
      formattedFullPrice={formattedFullPrice}
      formattedTotalPrice={formattedTotalPrice}
      withDiscount={withDiscount}
    />
    <ChangeCountLabel count={count} actions={actions} />
  </Item.Root>
)
