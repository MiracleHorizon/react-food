import { type FC, useRef } from 'react'
import { Dialog } from '@headlessui/react'

import { ModalWrapper } from '@ui/Modal'
import { DeliveryInfoModalContent } from './DeliveryInfoModalContent'
import type { ModalProps } from '@app-types/ModalProps'
import * as Modal from './DeliveryInfoModal.styled'

export const DeliveryInfoModal: FC<ModalProps> = modalProps => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <ModalWrapper {...modalProps}>
      <Dialog.Panel as={Modal.Panel}>
        <Dialog.Title ref={titleRef} as={Modal.Title}>
          Информация о доставке
        </Dialog.Title>
        <DeliveryInfoModalContent />
      </Dialog.Panel>
    </ModalWrapper>
  )
}
