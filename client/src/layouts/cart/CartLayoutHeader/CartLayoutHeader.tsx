import AppHeader from '@components/general/AppHeader'
import BackButton from '@components/general/BackButton'
import UserLabel from '@components/user/UserLabel'
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
