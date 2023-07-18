import { type FC, memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { useToggle } from '@hooks/useToggle'
import { useCartStore } from '@stores/cartStore'
import { Routes } from '@router/Routes.enum'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import trashSvg from '@public/svg/trash.svg'
import * as Label from './ClearCartLabel.styled'

const ClearCartModal = dynamic(
  import('../ClearCartModal').then(mod => mod.ClearCartModal),
  { ssr: false }
)

export const ClearCartLabel: FC<Props> = memo(
  ({ title, withImage, withConfirm, className }) => {
    const router = useRouter()
    const { isOpen, open, close } = useToggle(false)
    const clearCart = useCartStore(state => state.clearCart)

    const handleClearCart = useCallback(async () => {
      await clearCart()
      if (router.asPath === Routes.CART) {
        await router.push(Routes.HOME)
      }
      close()
    }, [clearCart, close, router])

    return (
      <>
        <Label.Root
          className={className}
          onClick={withConfirm ? open : handleClearCart}
        >
          {withImage && (
            <Label.Image src={trashSvg} height={24} width={24} alt='Очистить' />
          )}
          <span>{title}</span>
        </Label.Root>
        <ClearCartModal
          isOpen={isOpen}
          onClose={close}
          handleClearCart={handleClearCart}
        />
      </>
    )
  }
)

interface Props extends EmotionClassNameProps {
  title: string
  withImage?: boolean
  withConfirm?: boolean
}
