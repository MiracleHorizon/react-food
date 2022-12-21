import CartLayoutHeaderLogo from '@/layouts/cart/header/logo'
import BackButton from '@/ui/buttons/back'
import Avatar from '@/ui/avatar'
import * as Header from './CartLayoutHeader.styles'

const CartLayoutHeader = () => (
  <Header.Root>
    <Header.Content>
      <BackButton />
      <CartLayoutHeaderLogo />
      <Avatar />
    </Header.Content>
  </Header.Root>
)

export default CartLayoutHeader
