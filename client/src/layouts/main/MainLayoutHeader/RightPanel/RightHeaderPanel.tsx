import { Drawer } from '@components/general/Drawer'
import { HamburgerMenu } from '@components/general/HamburgerMenu'
import { UserMenuWidget } from '@components/user/UserMenuWidget'
import { OrdersLabel } from '@components/order/OrdersLabel'
import { CartLabel } from './CartLabel'
import * as Panel from './RightHeaderPanel.styled'

export const RightHeaderPanel = () => (
  <Panel.Root>
    <Panel.Content>
      <OrdersLabel />
      <CartLabel />
      <UserMenuWidget />
    </Panel.Content>
    <HamburgerMenu>
      <Drawer />
    </HamburgerMenu>
  </Panel.Root>
)
