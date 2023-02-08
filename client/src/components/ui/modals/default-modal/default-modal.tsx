import { Dialog } from '@headlessui/react'
import { AnimatePresence } from 'framer-motion'
import type { FC } from 'react'

import type { ChildrenProps } from '@/types/children-props'
import type { ModalProps } from '@/types/modal-props'
import { MotionModalBackdrop } from '@/public/styles/styled-components/modal-backdrop'
import { defaultModalAppearAnimation } from '@/styles/animations/default-modal-appear.animation'
import * as Modal from './default-modal.styled'

const DefaultModal: FC<ChildrenProps & ModalProps> = ({
  children,
  open,
  onClose,
  initialFocusRef
}) => (
  <AnimatePresence>
    {open && (
      <Dialog
        initialFocus={initialFocusRef}
        as={Modal.Root}
        unmount={open}
        open={open}
        onClose={onClose}
      >
        <MotionModalBackdrop {...defaultModalAppearAnimation} />
        <Modal.Container>{children}</Modal.Container>
      </Dialog>
    )}
  </AnimatePresence>
)

export default DefaultModal
