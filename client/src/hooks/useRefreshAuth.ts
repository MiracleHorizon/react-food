import { useCallback, useEffect } from 'react'

import { authService } from '@api/AuthService'
import { cartService } from '@api/CartService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { REFRESH_TOKEN_COOKIE_NAME } from '@constants/cookie'

export const useRefreshAuth = () => {
  const signin = useUserStore(state => state.signin)
  const isAuth = useUserStore(state => state.isAuth())
  const initializeCart = useCartStore(state => state.initialize)

  const handleRefreshAuth = useCallback(() => {
    return authService.refresh().then(user => {
      signin(user)
      return user
    })
  }, [signin])

  const handleFetchUserCart = useCallback(
    (userId: string) => {
      cartService
        .fetchUserCart(userId)
        .then(userCart => initializeCart(userCart))
    },
    [initializeCart]
  )

  useEffect(() => {
    if (isAuth) return

    import('js-cookie').then(({ default: Cookie }) => {
      const refreshToken = Cookie.get(REFRESH_TOKEN_COOKIE_NAME)
      if (!refreshToken) return

      handleRefreshAuth().then(user => handleFetchUserCart(user.id))
    })
  }, [handleFetchUserCart, handleRefreshAuth, isAuth])
}
