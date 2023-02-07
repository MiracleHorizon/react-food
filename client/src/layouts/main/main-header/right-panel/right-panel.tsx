import CartLabel from './cart-label'
import UserLabel from './user-label'
import OrdersLabel from '@/ui/orders-label'
import { StyledPanel } from './right-panel.styled'

const MainLayoutHeaderRightPanel = () => (
  <StyledPanel>
    <OrdersLabel />
    <CartLabel />
    <UserLabel />
  </StyledPanel>
)

export default MainLayoutHeaderRightPanel
