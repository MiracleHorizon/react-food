import Logo from './cart-header-logo'
import Avatar from '@ui/avatar/avatar'
import BackButton from '@ui/buttons/back-button'
import AppHeader from '@components/app-header'

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
