import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { CART_IMAGE_URL } from '@/utils/constants/images'
import * as Button from './cart-button.styled'

const CartButton: FC<Props> = ({ productsCost }) => {
  const router = useRouter()

  const handleGoToCart = () => {
    router.push('/cart')
  }

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
