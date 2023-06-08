import { type FC } from 'react'

import ItemContent from './ProductItemContent'
import ChangeCountLabel from './ChangeCountLabel'
import type { CartProductHocComponentProps } from '@hoc/withCartProduct'
import * as Item from './ProductItem.styled'

const ProductItem: FC<CartProductHocComponentProps> = ({
  image,
  count,
  title,
  actions,
  formattedWeight,
  price: { withDiscount, formattedFullPrice, formattedTotalPrice }
}) => {
  return (
    <Item.Root>
      {withDiscount && <Item.DiscountBadge />}
      <Item.Image
        src={image}
        alt={title}
        width={Item.imageSize}
        height={Item.imageSize}
        priority
      />
      <ItemContent
        title={title}
        formattedWeight={formattedWeight}
        formattedFullPrice={formattedFullPrice}
        formattedTotalPrice={formattedTotalPrice}
        withDiscount={withDiscount}
      />
      <ChangeCountLabel count={count} actions={actions} />
    </Item.Root>
  )
}

export default ProductItem
