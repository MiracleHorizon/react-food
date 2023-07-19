import type { FC } from 'react'

import { ConfirmModal } from '@ui/ConfirmModal'
import type { ModalProps } from '@app-types/ModalProps'

export const ClearCartModal: FC<Props> = ({
  handleClearCart,
  ...modalProps
}) => (
  <ConfirmModal
    title='Очистить корзину'
    submitTitle='Да, очистить'
    cancelTitle='Отменить'
    onSubmit={handleClearCart}
    {...modalProps}
  />
)

interface Props extends ModalProps {
  handleClearCart: VoidFunction
}
