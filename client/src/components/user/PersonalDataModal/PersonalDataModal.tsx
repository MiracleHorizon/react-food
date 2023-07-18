import { useRef } from 'react'
import { Dialog } from '@headlessui/react'

import { ModalWrapper } from '@ui/Modal'
import { PersonalDataForm } from './PersonalDataForm'
import { PersonalDataActions } from './PersonalDataActions'
import { userService } from '@api/UserService'
import { useUserStore } from '@stores/userStore'
import { useModalsStore } from '@stores/modalsStore'
import type { UserPersonalData } from '@models/user/UserPersonalData'
import * as Modal from './PersonalDataModal.styled'

export const PersonalDataModal = () => {
  const titleArticleRef = useRef<HTMLElement>(null)

  const user = useUserStore(state => state.user)
  const signin = useUserStore(state => state.signin)
  const isOpen = useModalsStore(state => state.isPersonalModalOpen)
  const close = useModalsStore(state => state.closePersonalDataModal)

  const saveChanges = (data: UserPersonalData) => {
    userService.changePersonalData(data).then(user => {
      signin(user)
      close()
    })
  }

  if (!user) {
    return null
  }

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={close}
      initialFocusRef={titleArticleRef}
    >
      <Dialog.Panel as={Modal.Panel}>
        <Modal.TitleArticle ref={titleArticleRef}>
          <Dialog.Title as={Modal.Title}>Мои данные</Dialog.Title>
        </Modal.TitleArticle>
        <PersonalDataForm user={user} onSubmit={saveChanges}>
          <PersonalDataActions onClose={close} />
        </PersonalDataForm>
      </Dialog.Panel>
    </ModalWrapper>
  )
}
