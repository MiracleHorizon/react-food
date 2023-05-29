import { useState } from 'react'
import dynamic from 'next/dynamic'

import { Avatar } from './UserLabel.styled'
import { useUserStore } from '@stores/userStore'
import SigninButton from '@components/signin/SigninButton'

const UserMenu = dynamic(import('../UserMenu'), {
  ssr: true
})

const UserLabel = () => {
  // const { data: user } = useSession()
  const user = useUserStore(state => state.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => setIsMenuOpen(true)

  const handleCloseMenu = () => setIsMenuOpen(false)

  if (!user) {
    return <SigninButton />
  }

  return (
    <>
      {/*<button*/}
      {/*  onClick={async () => {*/}
      {/*    await signIn('credentials', {*/}
      {/*      redirect: false*/}
      {/*    })*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Signin*/}
      {/*</button>*/}
      <Avatar onClick={handleOpenMenu} />
      <UserMenu user={user} isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  )
}

export default UserLabel
