import { type FC, memo, useState } from 'react'
import Image from 'next/image'

import CartModal from '@components/cart/CartModal'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import cartSvg from '@public/svg/cart_2.svg'
import * as Button from './CartButton.styled'

const CartButton: FC<Props> = ({ cartCost, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Button.Root className={className} onClick={handleOpenModal}>
        <Image src={cartSvg} width={24} height={24} alt='Корзина' />
        <Button.Cost>{cartCost}</Button.Cost>
      </Button.Root>
      <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default memo(CartButton)

interface Props extends EmotionClassNameProps {
  cartCost: string
}
