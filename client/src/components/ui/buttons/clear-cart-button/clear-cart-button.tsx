import { useRouter } from 'next/router'
import type { FC } from 'react'

import CartStore from '@/stores/Cart.store'
import { Routes } from '@/types/Routes'
import * as Button from './clear-cart-button.styled'

const TRASH_CART_IMAGE_URL =
  'https://yastatic.net/s3/eda-front/www/assets/desktop.trash.e4a122e26252ac568700.svg'

const ClearCartButton: FC<Props> = ({ title, withIcon }) => {
  const router = useRouter()

  const handleClearCart = () => {
    if (!confirm('Очистить корзину?')) return

    CartStore.clear()

    if (router.asPath === Routes.CART) {
      router.push(Routes.HOME)
    }
  }

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
}
