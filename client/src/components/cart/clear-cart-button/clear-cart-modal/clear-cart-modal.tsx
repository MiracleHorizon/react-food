import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import DefaultModal from '@/ui/modals/default-modal'
import Button, { ButtonVariant } from '@/ui/buttons/button'
import type { ModalProps } from '@/models/modal-props'
import { ModalContent } from './clear-cart-modal.styled'
import styles from './clear-cart-modal.module.css'

const ClearCartModal: FC<Props> = ({ open, onClose, handleClearCart }) => (
  <DefaultModal open={open} onClose={onClose}>
    <Dialog.Panel className={styles.panel}>
      <Dialog.Title as='h3' className={styles.title}>
        Очистить корзину?
      </Dialog.Title>
      <ModalContent>
        <Button
          text='Отменить'
          variant={ButtonVariant.SECONDARY}
          onClick={onClose}
        />
        <Button
          text='Да, очистить'
          variant={ButtonVariant.PRIMARY}
          onClick={handleClearCart}
        />
      </ModalContent>
    </Dialog.Panel>
  </DefaultModal>
)

export default ClearCartModal

interface Props extends ModalProps {
  handleClearCart: () => void
}
