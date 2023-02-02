import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import DefaultModal from '@/ui/modals/default-modal'
import ModalContent from './delivery-info-modal-content'
import type { ModalProps } from '@/models/modal-props'
import styles from './delivery-info-modal.module.css'

const DeliveryInfoModal: FC<ModalProps> = props => (
  <DefaultModal {...props}>
    <Dialog.Panel className={styles.panel}>
      <Dialog.Title as='h3' className={styles.title}>
        Информация о доставке
      </Dialog.Title>
      <ModalContent />
    </Dialog.Panel>
  </DefaultModal>
)

export default DeliveryInfoModal
