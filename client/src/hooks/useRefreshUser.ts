import useSWR from 'swr'

import { authService } from '@api/AuthService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { ACCESS_TOKEN_EXPIRES_TIME } from '@constants/cookie'

export const useRefreshUser = () => {
  const signin = useUserStore(state => state.signin)
  const isAuth = useUserStore(state => state.isAuth())
  const initializeCart = useCartStore(state => state.initialize)

  const fetcher = () => authService.refresh()

  useSWR(!isAuth ? 'refreshUser' : null, fetcher, {
    refreshInterval: ACCESS_TOKEN_EXPIRES_TIME,
    onSuccess({ user, cart }) {
      signin(user)
      initializeCart(cart)
    }
  })
}
