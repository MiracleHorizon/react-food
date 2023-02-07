import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import DefaultModal from '@/ui/modals/default-modal'
import { ButtonVariant } from '@/ui/buttons/button'
import type { ModalProps } from '@/types/modal-props'
import * as Modal from './clear-cart-modal.styled'
import styles from './clear-cart-modal.module.css'

const ClearCartModal: FC<Props> = ({ open, onClose, handleClearCart }) => (
  <DefaultModal open={open} onClose={onClose}>
    <Dialog.Panel className={styles.panel}>
      <Dialog.Title as='h3' className={styles.title}>
        Очистить корзину?
      </Dialog.Title>
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
