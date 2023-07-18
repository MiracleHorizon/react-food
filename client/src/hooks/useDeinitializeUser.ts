import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'

export const useDeinitializeUser = () => {
  const signout = useUserStore(state => state.signout)
  const deinitializeCart = useCartStore(state => state.deinitialize)

  const deinitialize = async () => {
    await signout()
    await deinitializeCart()
  }

  return { deinitialize }
}
