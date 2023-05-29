import { useCallback, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'

import { authService } from '@api/AuthService'
import { cartService } from '@api/CartService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'

export const useRefreshAuth = () => {
  const isAuth = useUserStore(state => state.isAuth())
  const initialize = useCartStore(state => state.initialize)
  const signin = useUserStore(state => state.signin)

  const { mutateAsync: refreshAuth } = useMutation({
    mutationKey: ['refreshAuth'],
    mutationFn: authService.refresh
  })
  const { mutateAsync: fetchCart } = useMutation({
    mutationKey: ['fetchUserCart'],
    mutationFn: cartService.fetchUserCart
  })

  const handleRefreshAuth = useCallback(async () => {
    return await refreshAuth().then(user => {
      signin(user)
      return user
    })
  }, [refreshAuth, signin])

  const handleFetchCart = useCallback(
    (userId: string) => {
      fetchCart(userId).then(cart => {
        initialize({
          userCartId: cart.id,
          products: cart.products
        })
      })
    },
    [fetchCart, initialize]
  )

  useEffect(() => {
    if (!isAuth) {
      import('js-cookie').then(({ default: Cookie }) => {
        if (!Cookie.get('refreshToken')) return
        handleRefreshAuth().then(user => handleFetchCart(user.id))
      })
    }
  }, [handleFetchCart, handleRefreshAuth, isAuth])
}
