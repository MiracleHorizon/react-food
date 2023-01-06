import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { RUBLE_SIGN } from '@/utils/constants'
import * as Button from './CartButton.styles'

const CartButton: FC<Props> = ({ totalProductsCost }) => {
  const router = useRouter()

  const handleGoToCart = () => router.push('/cart')

  return (
    <Button.Root onClick={handleGoToCart}>
      <Image
        width={24}
        height={24}
        src={
          'https://yastatic.net/s3/eda-front/www/assets/desktop.cart.0b30d34f57e6c5f2583a.svg'
        }
        alt='Cart'
      />
      <Button.Paragraph>
        {totalProductsCost}
        <Button.Currency>{RUBLE_SIGN}</Button.Currency>
      </Button.Paragraph>
    </Button.Root>
  )
}

export default CartButton

interface Props {
  totalProductsCost: number
}
