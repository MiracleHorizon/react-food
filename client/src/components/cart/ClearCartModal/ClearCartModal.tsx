import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import ModalWrapper from '@ui/Modal'
import { ButtonVariant } from '@ui/Button'
import type { ModalProps } from '@app-types/ModalProps'
import * as Modal from './ClearCartModal.styled'

const ClearCartModal: FC<Props> = ({ isOpen, handleClearCart, onClose }) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose}>
    <Dialog.Panel as={Modal.Panel}>
      <Modal.Header>
        <Dialog.Title as={Modal.Title}>Очистить корзину</Dialog.Title>
      </Modal.Header>
      <Modal.Content>
        <Modal.Button
          title='Отменить'
          variant={ButtonVariant.SECONDARY}
          onClick={onClose}
        />
        <Modal.Button
          title='Да, очистить'
          variant={ButtonVariant.PRIMARY}
          onClick={handleClearCart}
        />
      </Modal.Content>
    </Dialog.Panel>
  </ModalWrapper>
)

export default ClearCartModal

interface Props extends ModalProps {
  handleClearCart: VoidFunction
}
