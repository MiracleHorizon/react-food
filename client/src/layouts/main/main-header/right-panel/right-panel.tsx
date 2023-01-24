import CartLabel from './cart-label'
import Avatar from '@/ui/avatar/avatar'
import OrdersLabel from '@/ui/orders-label/orders-label'
import StyledPanel from './right-panel.styled'

const MainLayoutHeaderRightPanel = () => (
  <StyledPanel>
    <OrdersLabel />
    <CartLabel />
    <Avatar />
  </StyledPanel>
)

export default MainLayoutHeaderRightPanel
