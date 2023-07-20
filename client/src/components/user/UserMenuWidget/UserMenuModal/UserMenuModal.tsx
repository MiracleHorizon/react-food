import { type FC, useRef } from 'react'
import { Dialog } from '@headlessui/react'

import type { UserModel } from '@models/user/User'
import * as Modal from './UserMenuModal.styled'

export const UserMenuModal: FC<Props> = ({ user, isOpen, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null)

  return (
    <Dialog
      as={Modal.Root}
      initialFocus={panelRef}
      unmount={true}
      open={isOpen}
      onClose={onClose}
    >
      <Dialog.Panel as={Modal.Panel} ref={panelRef}>
        <Dialog.Title as={Modal.Title}>{user.name}</Dialog.Title>
        <Modal.OptionsList universalClickAction={onClose} />
      </Dialog.Panel>
    </Dialog>
  )
}

interface Props {
  user: UserModel
  isOpen: boolean
  onClose: VoidFunction
}
