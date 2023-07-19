import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import { ModalWrapper } from '@ui/Modal'
import { ButtonVariant } from '@ui/Button'
import type { ModalProps } from '@app-types/ModalProps'
import * as Modal from './ConfirmModal.styled'

export const ConfirmModal: FC<Props> = ({
  submitTitle,
  cancelTitle,
  isOpen,
  onClose,
  onSubmit,
  initialFocusRef,
  title
}) => (
  <ModalWrapper isOpen={isOpen} onClose={onClose}>
    <Dialog.Panel as={Modal.Panel} withTitle={title !== '' && Boolean(title)}>
      {title && (
        <Modal.Header>
          <Modal.TitleArticle>
            <Dialog.Title as={Modal.Title}>{title}</Dialog.Title>
          </Modal.TitleArticle>
        </Modal.Header>
      )}
      <Modal.Content ref={initialFocusRef}>
        <Modal.Button
          title={cancelTitle}
          variant={ButtonVariant.SECONDARY}
          onClick={onClose}
        />
        <Modal.Button
          title={submitTitle}
          variant={ButtonVariant.PRIMARY}
          onClick={onSubmit}
        />
      </Modal.Content>
    </Dialog.Panel>
  </ModalWrapper>
)

interface Props extends ModalProps {
  submitTitle: string
  cancelTitle: string
  onSubmit: VoidFunction
  title?: string
}
