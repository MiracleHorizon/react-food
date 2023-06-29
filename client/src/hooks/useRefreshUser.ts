import useSWR from 'swr'
import Cookie from 'js-cookie'

import { authService } from '@api/AuthService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import {
  ACCESS_TOKEN_EXPIRES_TIME,
  REFRESH_TOKEN_COOKIE_NAME
} from '@constants/cookie'

export const useRefreshUser = () => {
  const refreshToken = Cookie.get(REFRESH_TOKEN_COOKIE_NAME)

  const signin = useUserStore(state => state.signin)
  const isAuth = useUserStore(state => state.isAuth())
  const initializeCart = useCartStore(state => state.initialize)

  const fetcher = () => authService.refresh()

  useSWR(!isAuth && refreshToken ? 'refreshUser' : null, fetcher, {
    refreshInterval: ACCESS_TOKEN_EXPIRES_TIME,
    revalidateOnReconnect: true,
    revalidateOnFocus: false,
    refreshWhenHidden: false,
    onSuccess({ user, cart }) {
      signin(user)
      initializeCart(cart)
    }
  })
}
