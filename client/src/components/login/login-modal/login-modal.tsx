import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import DefaultModal from '@ui/modals/default-modal'
import LoginForm from '@components/login/login-form'
import type { ModalProps } from '@app-types/modal-props'
import * as Modal from './login-modal.styled'

const LoginModal: FC<ModalProps> = props => (
  <DefaultModal {...props}>
    <Dialog.Panel as={Modal.Panel}>
      <Dialog.Title as={Modal.Title}>Авторизация</Dialog.Title>
      <div>
        <LoginForm />
      </div>
    </Dialog.Panel>
  </DefaultModal>
)

export default LoginModal
