import CartLayoutHeaderLogo from '@/layouts/Cart/Header/Logo'
import BackButton from '@/ui/buttons/BackButton'
import Avatar from '@/ui/Avatar'
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
