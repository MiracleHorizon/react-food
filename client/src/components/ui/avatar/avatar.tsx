import { observer } from 'mobx-react-lite'
import type { FC } from 'react'

import userImage from '@/public/images/user.png'
import * as StyledAvatar from './avatar.styled'

const Avatar: FC<Props> = ({ className, onClick }) => (
  <StyledAvatar.Root
    data-el='avatar'
    className={className}
    withAction={Boolean(onClick)}
    onClick={onClick}
  >
    <StyledAvatar.Image src={userImage.src} alt='User' sizes='100%' fill />
  </StyledAvatar.Root>
)

export default observer(Avatar)

interface Props {
  className?: string
  onClick?: () => void
}
