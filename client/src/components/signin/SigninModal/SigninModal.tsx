import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import ModalWrapper from '@ui/Modal'
import SigninForm from '../SigninForm'
import type { ModalProps } from '@app-types/ModalProps'
import * as Modal from './SigninModal.styled'

const SigninModal: FC<ModalProps> = modalProps => (
  <ModalWrapper {...modalProps}>
    <Dialog.Panel as={Modal.Panel}>
      <Dialog.Title as={Modal.Title}>Авторизация</Dialog.Title>
      <SigninForm />
    </Dialog.Panel>
  </ModalWrapper>
)

export default SigninModal
