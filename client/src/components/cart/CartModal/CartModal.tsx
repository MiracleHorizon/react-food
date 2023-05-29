import { type FC, useState } from 'react'
import { Dialog } from '@headlessui/react'

import ModalWrapper from '@ui/Modal'
import CartModalHeader from './CartModalHeader'
import CartModalContent from './CartModalContent'
import CartModalFooter from './CartModalFooter'
import type { ModalProps } from '@app-types/ModalProps'
import { Panel } from './CartModal.styled'

const CartModal: FC<ModalProps> = modalProps => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true)
  const [isScrollOnBottom, setIsScrollOnBottom] = useState(false)

  return (
    <ModalWrapper {...modalProps}>
      <Dialog.Panel as={Panel}>
        <CartModalHeader isScrollOnTop={isScrollOnTop} />
        <CartModalContent
          setScrollIsOnTop={setIsScrollOnTop}
          setScrollIsOnBottom={setIsScrollOnBottom}
        />
        <CartModalFooter
          isScrollOnTop={isScrollOnTop}
          isScrollOnBottom={isScrollOnBottom}
        />
      </Dialog.Panel>
    </ModalWrapper>
  )
}

export default CartModal
