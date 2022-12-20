import { FC, memo, useCallback, useMemo } from 'react'

import CartStore from '@/stores/Cart.store'
import ChangeCountBar from '@/ui/ChangeCountBar'
import CartProductCardInfo from '@/components/Cards/CartProduct/Info'
import { CartProduct } from '@/entities/product/CartProduct'
import type { TCartProduct } from '@/models/product/TCartProduct'
import { RUBLE_SIGN } from '@/utils/constants'
import * as Card from './CartProductCard.styles'

const CartProductCard: FC<TCartProduct> = memo(productData => {
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
      <CartProductCardInfo
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
        {cartProduct.getTotalPrice()} {RUBLE_SIGN}
      </Card.Price>
    </Card.Root>
  )
})

CartProductCard.displayName = 'CartProductCard'

export default CartProductCard
