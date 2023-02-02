import { FC, memo, useCallback, useMemo } from 'react'

import ItemContent from './order-product-item-content'
import ChangeCountLabel from '@/ui/change-count-label'
import { cartStore } from '@/stores/cart.store'
import { CartProduct, CartProductModel } from '@/entities/product'
import * as Item from './order-product-item.styled'

const OrderProductItem: FC<Props> = ({ variant, ...productData }) => {
  const cartProduct = useMemo(() => new CartProduct(productData), [productData])
  const {
    title,
    count,
    image,
    formattedWeight,
    productReferenceId,
    price: { formattedPrice, formattedFullPrice, withDiscount }
  } = cartProduct

  const handleIncrementCount = useCallback(
    () => cartStore.incrementProductCount(productReferenceId),
    [productReferenceId]
  )

  const handleDecrementCount = useCallback(
    () => cartStore.decrementProductCount(productReferenceId),
    [productReferenceId]
  )

  return (
    <Item.Root variant={variant}>
      <ItemContent
        variant={variant}
        title={title}
        imagePath={image}
        weight={formattedWeight}
        withDiscount={withDiscount}
      />
      <ChangeCountLabel
        value={count}
        increment={handleIncrementCount}
        decrement={handleDecrementCount}
      />
      <Item.PriceLabel>
        {withDiscount && (
          <Item.ThroughFullPrice>{formattedFullPrice}</Item.ThroughFullPrice>
        )}
        <Item.Price>{formattedPrice}</Item.Price>
      </Item.PriceLabel>
    </Item.Root>
  )
}

export default memo(OrderProductItem)

interface Props extends CartProductModel {
  variant: 'default' | 'small'
}
