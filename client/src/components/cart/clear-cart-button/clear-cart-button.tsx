import { FC, useCallback } from 'react'
import { useRouter } from 'next/router'

import { cartStore } from '@/stores/cart.store'
import { Routes } from '@/types/routes'
import { TRASH_CART_IMAGE_URL } from '@/utils/constants/images'
import * as Button from './clear-cart-button.styled'

const ClearCartButton: FC<Props> = ({ title, withIcon }) => {
  const router = useRouter()

  const handleClearCart = useCallback(() => {
    cartStore.clearCart().then(() => {
      if (router.asPath !== Routes.HOME) {
        router.push(Routes.HOME)
      }
    })
  }, [router])

  return (
    <Button.Root onClick={handleClearCart}>
      {withIcon && (
        <Button.Image
          src={TRASH_CART_IMAGE_URL}
          width={24}
          height={24}
          alt='Clear'
        />
      )}
      {title}
    </Button.Root>
  )
}

export default ClearCartButton

interface Props {
  title: string
  withIcon?: boolean
  withConfirm?: boolean
}
