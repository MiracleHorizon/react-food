import { useRouter } from 'next/router'

import { ButtonVariant } from '@ui/Button'
import { Routes } from '@router/Routes.enum'
import { Button } from './styledComponents'

export const SigninButton = () => {
  const router = useRouter()

  const navigateToSignin = () => router.push(Routes.SIGNIN)

  return (
    <Button
      title='Войти'
      variant={ButtonVariant.SECONDARY}
      onClick={navigateToSignin}
    />
  )
}
