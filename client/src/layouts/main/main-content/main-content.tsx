import type { FC } from 'react'

import CartPanel from './cart-panel'
import LeftSidebar from './left-sidebar'
import type { ChildrenProps } from '@/types/children-props'
import StyledContent from './main-content.styled'

const MainLayoutContent: FC<ChildrenProps> = ({ children }) => (
  <StyledContent>
    <LeftSidebar />
    {children}
    <CartPanel />
  </StyledContent>
)

export default MainLayoutContent
