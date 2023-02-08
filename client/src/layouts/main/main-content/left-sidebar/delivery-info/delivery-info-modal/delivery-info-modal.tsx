import { FC, useRef } from 'react'
import { Dialog } from '@headlessui/react'

import DefaultModal from '@/ui/modals/default-modal'
import ModalContent from './delivery-info-modal-content'
import type { ModalProps } from '@/types/modal-props'
import * as Modal from './delivery-info-modal.styled'

const DeliveryInfoModal: FC<ModalProps> = props => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <DefaultModal initialFocusRef={titleRef} {...props}>
      <Dialog.Panel as={Modal.Panel} {...Modal.animation}>
        <Dialog.Title ref={titleRef} as={Modal.Title}>
          Информация о доставке
        </Dialog.Title>
        <ModalContent />
      </Dialog.Panel>
    </DefaultModal>
  )
}

export default DeliveryInfoModal
