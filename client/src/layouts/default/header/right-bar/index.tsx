import { observer } from 'mobx-react-lite'

import Avatar from '@/ui/avatar'
import CartLabel from '@/ui/buttons/cart'
import OrdersLabel from '@/ui/orders-label'
import CartStore from '@/stores/Cart.store'
import RightBar from './DefaultLayoutHeaderRightBar.styles'

const DefaultLayoutHeaderRightBar = () => (
  <RightBar>
    <OrdersLabel />
    {CartStore.totalCost > 0 && (
      <CartLabel totalProductsCost={CartStore.totalCost} />
    )}
    <Avatar />
  </RightBar>
)

export default observer(DefaultLayoutHeaderRightBar)
