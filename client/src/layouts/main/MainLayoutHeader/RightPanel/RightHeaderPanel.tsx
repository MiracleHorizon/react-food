import UserLabel from '@components/user/UserLabel'
import OrdersLabel from '@components/order/OrdersLabel'
import CartLabel from './CartLabel'
import { Panel } from './RightHeaderPanel.styled'

const RightHeaderPanel = () => (
  <Panel>
    <OrdersLabel />
    <CartLabel />
    <UserLabel />
  </Panel>
)

export default RightHeaderPanel
