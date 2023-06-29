import { useCallback, useEffect } from 'react'
import Cookie from 'js-cookie'

import { authService } from '@api/AuthService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { REFRESH_TOKEN_COOKIE_NAME } from '@constants/cookie'

export const useRefreshAuth = () => {
  const signin = useUserStore(state => state.signin)
  const isAuth = useUserStore(state => state.isAuth())
  const initializeCart = useCartStore(state => state.initialize)

  const handleRefreshAuth = useCallback(async () => {
    const { user, cart } = await authService.refresh()

    signin(user)
    initializeCart(cart)
  }, [signin, initializeCart])

  useEffect(() => {
    if (isAuth) return

    const refreshToken = Cookie.get(REFRESH_TOKEN_COOKIE_NAME)
    if (!refreshToken) return
    handleRefreshAuth()
  }, [handleRefreshAuth, isAuth])
}
