import { FC, useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import ClearCartModal from './clear-cart-modal'
import { useCartStore } from '@/stores/cart.store'
import { Routes } from '@/types/routes'
import { TRASH_CART_IMAGE_URL } from '@/utils/constants/images'
import * as Button from './clear-cart-button.styled'

const ClearCartButton: FC<Props> = ({ title, withIcon, withConfirm }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const router = useRouter()

  const handleOpenModal = () => setModalOpen(true)

  const handleCloseModal = () => setModalOpen(false)

  const handleClearCart = useCallback(() => {
    handleCloseModal()

    useCartStore.clearCart().then(() => {
      if (router.asPath !== Routes.HOME) {
        router.push(Routes.HOME)
      }
    })
  }, [router])

  return (
    <>
      <Button.Root onClick={withConfirm ? handleOpenModal : handleClearCart}>
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
      <ClearCartModal
        open={modalOpen}
        onClose={handleCloseModal}
        handleClearCart={handleClearCart}
      />
    </>
  )
}

export default ClearCartButton

interface Props {
  title: string
  withIcon?: boolean
  withConfirm?: boolean
}
