import dynamic from 'next/dynamic'

import SigninButton from '@components/signin/SigninButton'
import { useUserStore } from '@stores/userStore'
import { useToggle } from '@hooks/useToggle'
import { Avatar } from './UserMenuWidget.styled'

const UserMenu = dynamic(() => import('./UserMenu'), {
  ssr: false
})
const UserPersonalDataModal = dynamic(
  () => import('../PersonalDataModal/PersonalDataModal'),
  { ssr: false }
)

const UserMenuWidget = () => {
  const user = useUserStore(state => state.user)
  const { isOpen, open, close } = useToggle(false)

  if (!user) {
    return <SigninButton />
  }

  return (
    <>
      <Avatar onClick={open} />
      <UserMenu user={user} isOpen={isOpen} onClose={close} />
      <UserPersonalDataModal />
    </>
  )
}

export default UserMenuWidget
