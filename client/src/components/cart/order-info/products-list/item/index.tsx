import { FC, memo, useCallback, useMemo } from 'react'

import CartStore from '@/stores/Cart.store'
import ChangeCountBar from '@/ui/change-count-bar'
import OrderProductItemInfo from '@/components/cart/order-info/products-list/item/info'
import { CartProduct } from '@/entities/product/CartProduct'
import { RUBLE_SIGN } from '@/utils/constants'
import type { CartProductModel } from '@/models/product/CartProductModel'
import * as Card from './OrderProductItem.styles'

const OrderProductItem: FC<CartProductModel> = productData => {
  const cartProduct = useMemo(() => {
    return new CartProduct(productData)
  }, [productData])

  const handleIncrementCount = useCallback(() => {
    CartStore.incrementProductCount(cartProduct.id)
  }, [cartProduct.id])

  const handleDecrementCount = useCallback(() => {
    CartStore.decrementProductCount(cartProduct.id)
  }, [cartProduct.id])

  return (
    <Card.Root>
      <OrderProductItemInfo
        title={cartProduct.title}
        weight={cartProduct.getWeight()}
        imageUrl={cartProduct.getImageUrl()}
      />
      <ChangeCountBar
        value={productData.count}
        increment={handleIncrementCount}
        decrement={handleDecrementCount}
      />
      <Card.Price>
        {cartProduct.getCost()} {RUBLE_SIGN}
      </Card.Price>
    </Card.Root>
  )
}

OrderProductItem.displayName = 'OrderProductItem'

export default memo(OrderProductItem)
