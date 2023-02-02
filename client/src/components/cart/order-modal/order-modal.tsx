import { FC, useState } from 'react'
import { Dialog } from '@headlessui/react'

import ModalHeader from './order-modal-header'
import ModalContent from './order-modal-content'
import ModalFooter from './order-modal-footer'
import DefaultModal from '@/ui/modals/default-modal'
import type { ModalProps } from '@/models/modal-props'
import styles from './order-modal.module.css'

const OrderModal: FC<ModalProps> = ({ open, onClose }) => {
  const [isScrollOnTop, setScrollOnTop] = useState(true)
  const [isScrollOnBottom, setScrollOnBottom] = useState(false)

  return (
    <DefaultModal open={open} onClose={onClose}>
      <Dialog.Panel as='div' className={styles.panel}>
        <ModalHeader isScrollOnTop={isScrollOnTop} />
        <ModalContent
          isScrollOnTop={isScrollOnTop}
          isScrollOnBottom={isScrollOnBottom}
          setScrollOnTop={setScrollOnTop}
          setScrollOnBottom={setScrollOnBottom}
        />
        <ModalFooter
          isScrollOnTop={isScrollOnTop}
          isScrollOnBottom={isScrollOnBottom}
        />
      </Dialog.Panel>
    </DefaultModal>
  )
}

export default OrderModal
