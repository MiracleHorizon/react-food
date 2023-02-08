import { FC, useState } from 'react'
import { Dialog } from '@headlessui/react'

import ModalHeader from './order-modal-header'
import ModalContent from './order-modal-content'
import ModalFooter from './order-modal-footer'
import DefaultModal from '@ui/modals/default-modal'
import type { ModalProps } from '@app-types/modal-props'
import { defaultModalAppearAnimation } from '@styles/animations/default-modal-appear.animation'
import { StyledPanel } from './order-modal.styled'

const OrderModal: FC<ModalProps> = props => {
  const [isScrollOnTop, setScrollOnTop] = useState(true)
  const [isScrollOnBottom, setScrollOnBottom] = useState(false)

  return (
    <DefaultModal {...props}>
      <Dialog.Panel as={StyledPanel} {...defaultModalAppearAnimation}>
        <ModalHeader isScrollOnTop={isScrollOnTop} />
        <ModalContent
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
