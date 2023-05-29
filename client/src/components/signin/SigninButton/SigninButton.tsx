import { useState } from 'react'

import SigninModal from '../SigninModal'
import { ButtonVariant } from '@ui/Button'
import { Button } from './SigninButton.styled'

const SigninButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Button
        title='Войти'
        variant={ButtonVariant.SECONDARY}
        onClick={handleOpenModal}
      />
      <SigninModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default SigninButton
