import { type FC, memo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import { useToggle } from '@hooks/useToggle'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import cartSvg from '@public/svg/cart_2.svg'
import * as Button from './CartButton.styled'

const CartModal = dynamic(
  import('../CartModal').then(mod => mod.CartModal),
  { ssr: false }
)

export const CartButton: FC<Props> = memo(({ cartCost, className }) => {
  const { isOpen, open, close } = useToggle(false)

  return (
    <>
      <Button.Root className={className} onClick={open}>
        <Image src={cartSvg} width={24} height={24} alt='Корзина' />
        <Button.Cost>{cartCost}</Button.Cost>
      </Button.Root>
      <CartModal isOpen={isOpen} onClose={close} />
    </>
  )
})

interface Props extends EmotionClassNameProps {
  cartCost: string
}
