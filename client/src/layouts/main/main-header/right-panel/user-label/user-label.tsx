import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import dynamic from 'next/dynamic'

import { useUserStore } from '@stores/user.store'
import { StyledAvatar, StyledLoginButton } from './user-label.styled'

const UserMenu = dynamic(import('@components/user-menu'), {
  ssr: false
})

const UserLabel = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpenMenu = () => setMenuOpen(true)

  const handleCloseMenu = () => setMenuOpen(false)

  if (!useUserStore.user) {
    return <StyledLoginButton />
  }

  return (
    <>
      <StyledAvatar onClick={handleOpenMenu} />
      <UserMenu
        user={useUserStore.user}
        open={menuOpen}
        onClose={handleCloseMenu}
      />
    </>
  )
}

export default observer(UserLabel)
