import { type FC, memo, useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import ClearCartModal from '../ClearCartModal'
import { useCartStore } from '@stores/cartStore'
import { Routes } from '@router/Routes.enum'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import trashSvg from '@public/svg/trash.svg'
import * as Label from './ClearCartLabel.styled'

const ClearCartLabel: FC<Props> = ({
  title,
  withImage,
  withConfirm,
  className
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const clearCart = useCartStore(state => state.clearCart)
  const router = useRouter()

  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)

  const handleClearCart = useCallback(async () => {
    await clearCart()
    if (router.asPath === Routes.CART) router.push(Routes.HOME)
    handleCloseModal
  }, [clearCart, router])

  return (
    <>
      <Label.Root
        className={className}
        onClick={withConfirm ? handleOpenModal : handleClearCart}
      >
        {withImage && (
          <Label.Image src={trashSvg} height={24} width={24} alt='Очистить' />
        )}
        <span>{title}</span>
      </Label.Root>
      <ClearCartModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        handleClearCart={handleClearCart}
      />
    </>
  )
}

export default memo(ClearCartLabel)

interface Props extends EmotionClassNameProps {
  title: string
  withImage?: boolean
  withConfirm?: boolean
}
