import { useCallback } from 'react'

import { useCartStore } from '@stores/cartStore'
import { useOrderStore } from '@stores/orderStore'

export const useResetOrder = () => {
  const clearCart = useCartStore(state => state.clearCart)
  const resetOrder = useOrderStore(state => state.reset)

  const handleResetOrder = useCallback(async () => {
    resetOrder()
    clearCart()
  }, [clearCart, resetOrder])

  return { handleResetOrder }
}
