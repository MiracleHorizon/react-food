import { type FC, memo } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import userImage from '@public/images/user.png'
import * as Avatar from './Avatar.styled'

const AvatarComponent: FC<Props> = memo(({ className, onClick }) => (
  <Avatar.Root
    className={className}
    withClickAction={Boolean(onClick)}
    onClick={onClick}
  >
    <Avatar.Image src={userImage.src} alt='Avatar' sizes='100%' fill />
  </Avatar.Root>
))

export { AvatarComponent as Avatar }

interface Props extends EmotionClassNameProps {
  onClick?: VoidFunction
}
