import { useRef } from 'react'
import { Dialog } from '@headlessui/react'

import { ModalWrapper } from '@ui/Modal'
import { DeliveryAddressesModalContent } from './DeliveryAddressesModalContent'
import { useModalsStore } from '@stores/modalsStore'
import * as Modal from './DeliveryAddressesModal.styled'

// TODO: reset state on close
export const DeliveryAddressesModal = () => {
  const titleArticleRef = useRef<HTMLElement>(null)

  const isOpen = useModalsStore(state => state.isDeliveryAddressesModalOpen)
  const close = useModalsStore(state => state.closeDeliveryAddressesModal)

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={close}
      initialFocusRef={titleArticleRef}
    >
      <Dialog.Panel as={Modal.Panel}>
        <Modal.Header>
          <Modal.TitleArticle ref={titleArticleRef}>
            <Modal.Title>Мои адреса</Modal.Title>
          </Modal.TitleArticle>
        </Modal.Header>
        <DeliveryAddressesModalContent />
      </Dialog.Panel>
    </ModalWrapper>
  )
}
