import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import type { ChildrenProps } from '@app-types/ChildrenProps'
import type { ModalProps } from '@app-types/ModalProps'
import { ModalBackdrop } from '@styles/styled-components/ModalBackdrop'
import * as Modal from './Modal.styled'

const ModalComponent: FC<Props> = ({
  children,
  isOpen,
  onClose,
  initialFocusRef
}) => (
  <Dialog
    as={Modal.Root}
    open={isOpen}
    unmount={isOpen}
    initialFocus={initialFocusRef}
    onClose={onClose}
  >
    <ModalBackdrop />
    <Modal.Container>{children}</Modal.Container>
  </Dialog>
)

export default ModalComponent

type Props = ChildrenProps & ModalProps
