import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import DefaultModal from '@/ui/modals/default-modal'
import { ButtonVariant } from '@/ui/buttons/button'
import type { ModalProps } from '@/types/modal-props'
import { defaultModalAppearAnimation } from '@/styles/animations/default-modal-appear.animation'
import * as Modal from './clear-cart-modal.styled'

const ClearCartModal: FC<Props> = ({ open, onClose, handleClearCart }) => (
  <DefaultModal open={open} onClose={onClose}>
    <Dialog.Panel as={Modal.Panel} {...defaultModalAppearAnimation}>
      <Modal.Header>
        <Dialog.Title as={Modal.Title}>Очистить корзину?</Dialog.Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.StyledButton
          text='Отменить'
          variant={ButtonVariant.SECONDARY}
          onClick={onClose}
        />
        <Modal.StyledButton
          text='Да, очистить'
          variant={ButtonVariant.PRIMARY}
          onClick={handleClearCart}
        />
      </Modal.Content>
    </Dialog.Panel>
  </DefaultModal>
)

export default ClearCartModal

interface Props extends ModalProps {
  handleClearCart: () => void
}
