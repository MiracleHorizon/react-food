import { type FC, useCallback, useMemo } from 'react'

import { CartProduct } from '@entities/CartProduct'
import { useCartStore } from '@stores/cartStore'
import type { Props } from './withCartProduct.types'

const WithCartProduct: FC<Props> = ({
  WrappedComponent,
  productData,
  className
}) => {
  const cartProduct = useMemo(() => new CartProduct(productData), [productData])
  const { productReferenceId, image, count, formattedWeight } = cartProduct

  const incrementProductCount = useCartStore(
    state => state.incrementProductCount
  )
  const decrementProductCount = useCartStore(
    state => state.decrementProductCount
  )

  const handleIncrementCount = useCallback(
    () => incrementProductCount(productReferenceId),
    [incrementProductCount, productReferenceId]
  )

  const handleDecrementCount = useCallback(
    () => decrementProductCount(productReferenceId),
    [decrementProductCount, productReferenceId]
  )

  const actions = useMemo(() => {
    return {
      increment: handleIncrementCount,
      decrement: handleDecrementCount
    }
  }, [handleIncrementCount, handleDecrementCount])

  return (
    <WrappedComponent
      {...cartProduct}
      image={image}
      count={count}
      actions={actions}
      formattedWeight={formattedWeight}
      className={className}
    />
  )
}

export default WithCartProduct
