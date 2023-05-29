import AppHeader from '@components/AppHeader'
import UserLabel from '@components/user/UserLabel'
import BackButton from '@ui/BackButton'
import { Content } from './CartLayoutHeader.styled'

const CartLayoutHeader = () => (
  <AppHeader>
    <Content>
      <BackButton />
      <UserLabel />
    </Content>
  </AppHeader>
)

export default CartLayoutHeader
