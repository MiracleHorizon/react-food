import { useCallback } from 'react'
import { useEventListener } from 'usehooks-ts'
import dynamic from 'next/dynamic'

import { SigninButton } from '@components/user/authControl'
import { useUserStore } from '@stores/userStore'
import { useToggle } from '@hooks/useToggle'
import { isBrowser } from '@helpers/isBrowser'
import { breakpoints } from '@styles/responsiveness/breakpoints'
import { Avatar } from './UserMenuWidget.styled'

const UserMenuModal = dynamic(
  import('./UserMenuModal').then(mod => mod.UserMenuModal),
  { ssr: false }
)

export const UserMenuWidget = () => {
  const { isOpen, open, close } = useToggle(false)
  const user = useUserStore(state => state.user)

  const handleWindowResize = useCallback(() => {
    if (!isBrowser()) return
    const isTablet = window.innerWidth <= breakpoints.tablet
    if (isTablet) close()
  }, [close])

  useEventListener('resize', handleWindowResize)

  if (!user) {
    return <SigninButton />
  }

  return (
    <>
      <Avatar onClick={open} />
      {isOpen && <UserMenuModal user={user} isOpen={isOpen} onClose={close} />}
    </>
  )
}
