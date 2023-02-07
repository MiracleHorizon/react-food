import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

import DefaultModal from '@/ui/modals/default-modal'
import LoginForm from '@/components/login/login-form'
import type { ModalProps } from '@/types/modal-props'
import styles from './login-modal.module.css'

const LoginModal: FC<ModalProps> = props => (
  <DefaultModal {...props}>
    <Dialog.Panel className={styles.panel}>
      <Dialog.Title as='h3' className={styles.title}>
        Авторизация
      </Dialog.Title>
      <div>
        <LoginForm />
      </div>
    </Dialog.Panel>
  </DefaultModal>
)

export default LoginModal
