import Logo from './logo'
import Avatar from '@/ui/avatar'
import BackButton from '@/ui/buttons/back'
import AppHeader from '@/components/app-header'

const CartLayoutHeader = () => (
  <AppHeader>
    <>
      <BackButton />
      <Logo />
      <Avatar />
    </>
  </AppHeader>
)

export default CartLayoutHeader
