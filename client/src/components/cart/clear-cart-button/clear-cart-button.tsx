import { FC, memo, useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import ClearCartModal from './clear-cart-modal'
import { useCartStore } from '@stores/cart.store'
import { Routes } from '@router/routes.enum'
import { TRASH_CART_IMAGE_URL } from '@utils/constants/images'
import * as Button from './clear-cart-button.styled'

const ClearCartButton: FC<Props> = ({ title, withIcon, withConfirm }) => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)

  const handleCloseModal = () => setModalOpen(false)

  const handleClearCart = useCallback(() => {
    handleCloseModal()

    useCartStore.clearCart().then(() => {
      if (router.asPath === Routes.CART) {
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

export default memo(ClearCartButton)

interface Props {
  title: string
  withIcon?: boolean
  withConfirm?: boolean
}
