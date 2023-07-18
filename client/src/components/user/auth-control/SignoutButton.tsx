import type { FC } from 'react'

import { useSignout } from '@hooks/useSignout'
import { ButtonVariant } from '@ui/Button'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { Button } from './styled-components'

export const SignoutButton: FC<EmotionClassNameProps> = props => {
  const { signout } = useSignout()

  return (
    <Button
      title='Выйти'
      variant={ButtonVariant.SECONDARY}
      onClick={signout}
      {...props}
    />
  )
}
