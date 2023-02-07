import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

import { ModalBackdrop } from '@/styles/styled-components/modal-backdrop'
import { ModalContainer } from './default-layout.styled'
import type { ChildrenProps } from '@/types/children-props'
import type { ModalProps } from '@/types/modal-props'
import styles from './default-modal.module.css'

const transition = {
  enter: styles.enter,
  enterFrom: styles.enterFrom,
  enterTo: styles.enterTo,
  leave: styles.leave,
  leaveFrom: styles.leaveFrom,
  leaveTo: styles.leaveTo
}

const DefaultModal: FC<ChildrenProps & ModalProps> = ({
  children,
  open,
  onClose
}) => (
  <Transition appear show={open} as={Fragment}>
    <Dialog unmount={open} className={styles.root} as='div' onClose={onClose}>
      <Transition.Child {...transition} as={Fragment}>
        <ModalBackdrop />
      </Transition.Child>
      <Transition.Child {...transition} as={Fragment}>
        <ModalContainer>{children}</ModalContainer>
      </Transition.Child>
    </Dialog>
  </Transition>
)

export default DefaultModal
