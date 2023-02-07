import { observer } from 'mobx-react-lite'

import { useUserStore } from '@/stores/user.store'
import { StyledAvatar, StyledLoginButton } from './user-label.styled'

const UserLabel = () => {
  if (!useUserStore.user) {
    return <StyledLoginButton />
  }

  return <StyledAvatar />
}

export default observer(UserLabel)
