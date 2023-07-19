import type { FC } from 'react'

import { ConfirmModal } from '@ui/ConfirmModal'
import { ButtonVariant } from '@ui/Button'
import { useSignout } from '@hooks/useSignout'
import { useToggle } from '@hooks/useToggle'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { Button } from './styled-components'

export const SignoutButton: FC<EmotionClassNameProps> = props => {
  const { isOpen, open, close } = useToggle(false)
  const { signout } = useSignout()

  return (
    <>
      <Button
        title='Выйти'
        variant={ButtonVariant.SECONDARY}
        onClick={open}
        {...props}
      />
      <ConfirmModal
        title='Вы уверены, что хотите выйти?'
        submitTitle='Выйти'
        cancelTitle='Отменить'
        onSubmit={signout}
        isOpen={isOpen}
        onClose={close}
      />
    </>
  )
}
