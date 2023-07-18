import dynamic from 'next/dynamic'

import { SigninButton } from '@components/user/auth-control'
import { useUserStore } from '@stores/userStore'
import { useToggle } from '@hooks/useToggle'
import { Avatar } from './UserMenuWidget.styled'

const UserMenu = dynamic(
  import('./UserMenu').then(mod => mod.UserMenu),
  { ssr: false }
)
const PersonalDataModal = dynamic(
  import('../PersonalDataModal').then(mod => mod.PersonalDataModal),
  { ssr: false }
)

export const UserMenuWidget = () => {
  const { isOpen, open, close } = useToggle(false)
  const user = useUserStore(state => state.user)

  if (!user) {
    return <SigninButton />
  }

  return (
    <>
      <Avatar onClick={open} />
      <UserMenu user={user} isOpen={isOpen} onClose={close} />
      <PersonalDataModal />
    </>
  )
}
