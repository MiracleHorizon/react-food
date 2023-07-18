import { Dialog } from '@headlessui/react'
import type { FC, PropsWithChildren } from 'react'

import type { ModalProps } from '@app-types/ModalProps'
import { ModalBackdrop } from '@styles/styled-components/ModalBackdrop'
import * as Modal from './Modal.styled'

export const ModalWrapper: FC<Props> = ({
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

type Props = PropsWithChildren & ModalProps
