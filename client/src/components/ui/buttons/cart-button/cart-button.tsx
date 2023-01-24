import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { Routes } from '@/types/Routes'
import * as Button from './cart-button.styled'

const CART_IMAGE_URL =
  'https://yastatic.net/s3/eda-front/www/assets/desktop.cart.0b30d34f57e6c5f2583a.svg'

const CartButton: FC<Props> = ({ productsCost }) => {
  const router = useRouter()

  const handleGoToCart = () => router.push(Routes.CART)

  return (
    <Button.Root onClick={handleGoToCart}>
      <Image width={24} height={24} src={CART_IMAGE_URL} alt='Cart' />
      <Button.Cost>{productsCost}</Button.Cost>
    </Button.Root>
  )
}

export default CartButton

interface Props {
  productsCost: string
}
