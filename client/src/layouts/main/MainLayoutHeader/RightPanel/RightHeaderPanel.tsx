import UserMenuWidget from '@components/user/UserMenuWidget'
import OrdersLabel from '@components/order/OrdersLabel'
import NavigationMenu from '@components/navigation/NavigationMenu'
import CartLabel from './CartLabel'
import * as Panel from './RightHeaderPanel.styled'

const RightHeaderPanel = () => (
  <Panel.Root>
    <Panel.Content>
      <OrdersLabel />
      <CartLabel />
      <UserMenuWidget />
    </Panel.Content>
    <NavigationMenu />
  </Panel.Root>
)

export default RightHeaderPanel
