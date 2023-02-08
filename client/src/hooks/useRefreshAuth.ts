import { useCallback, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'

import { useUserStore } from '@/stores/user.store'
import { useCartStore } from '@/stores/cart.store'
import { authService } from '@/modules/auth'
import { cartService } from '@/api/services/cart.service'

export const useRefreshAuth = () => {
  const { mutateAsync: refreshAuth } = useMutation({
    mutationKey: ['refreshAuth'],
    mutationFn: authService.refresh
  })
  const { mutateAsync: fetchCart } = useMutation({
    mutationKey: ['fetchCart'],
    mutationFn: cartService.fetchCart
  })

  const handleRefreshAuth = useCallback(async () => {
    return await refreshAuth().then(user => {
      useUserStore.signin(user)
      return user
    })
  }, [refreshAuth])

  const handleFetchCart = useCallback(
    (userId: string) => {
      fetchCart(userId).then(cart => useCartStore.initialize(cart))
    },
    [fetchCart]
  )

  useEffect(() => {
    if (!useUserStore.isAuth) {
      import('js-cookie').then(({ default: Cookie }) => {
        if (!Cookie.get('refreshToken')) return
        handleRefreshAuth().then(user => handleFetchCart(user.id))
      })
    }
  }, [handleRefreshAuth, handleFetchCart])
}
