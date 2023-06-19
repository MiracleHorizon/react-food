import { Dialog } from '@headlessui/react'
import type { FC, PropsWithChildren } from 'react'

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
    unmount={true}
    initialFocus={initialFocusRef}
    onClose={onClose}
  >
    <ModalBackdrop />
    <Modal.Container>{children}</Modal.Container>
  </Dialog>
)

export default ModalComponent

type Props = PropsWithChildren & ModalProps
