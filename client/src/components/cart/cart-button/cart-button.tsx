import { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { CART_IMAGE_URL } from '@utils/constants/images'
import * as Button from './cart-button.styled'

const OrderModal = dynamic(import('../order-modal'))

const CartButton: FC<Props> = ({ productsCost, className }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)

  const handleCloseModal = () => setModalOpen(false)

  return (
    <>
      <Button.Root className={className} onClick={handleOpenModal}>
        <Image width={24} height={24} src={CART_IMAGE_URL} alt='Cart' />
        <Button.Cost>{productsCost}</Button.Cost>
      </Button.Root>
      <OrderModal open={modalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default CartButton

interface Props {
  productsCost: string
  className?: string
}
