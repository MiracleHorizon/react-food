import { FC, memo, useCallback, useMemo } from 'react'

import ItemContent from './cart-panel-item-content'
import ChangeCountLabel from './change-count-label'
import DiscountIcon from '@ui/discount-icon'
import { useCartStore } from '@stores/cart.store'
import { CartProduct, CartProductModel } from '@entities/product'
import * as Item from './cart-panel-item.styled'

const CartPanelItem: FC<CartProductModel> = productData => {
  const cartProduct = useMemo(() => new CartProduct(productData), [productData])
  const {
    title,
    count,
    image,
    formattedWeight,
    productReferenceId,
    price: { withDiscount, description: priceDescription }
  } = cartProduct

  const handleDecrementCount = useCallback(
    () => useCartStore.decrementProductCount(productReferenceId),
    [productReferenceId]
  )

  const handleIncrementCount = useCallback(
    () => useCartStore.incrementProductCount(productReferenceId),
    [productReferenceId]
  )

  return (
    <Item.Root>
      {withDiscount && <DiscountIcon />}
      <Item.Image
        priority
        width={Item.imageSize}
        height={Item.imageSize}
        src={image}
        alt={title}
      />
      <ItemContent
        title={title}
        weight={formattedWeight}
        {...priceDescription}
      />
      <ChangeCountLabel
        count={count}
        increment={handleIncrementCount}
        decrement={handleDecrementCount}
      />
    </Item.Root>
  )
}

export default memo(CartPanelItem)
