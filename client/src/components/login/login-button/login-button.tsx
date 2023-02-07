import { useState } from 'react'

import LoginModal from '../login-modal'
import { ButtonVariant } from '@/ui/buttons/button'
import { StyledButton } from './login-button.styled'

const LoginButton = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)

  const handleCloseModal = () => setModalOpen(false)

  return (
    <>
      <StyledButton
        text='Войти'
        variant={ButtonVariant.SECONDARY}
        onClick={handleOpenModal}
      />
      <LoginModal open={modalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default LoginButton
