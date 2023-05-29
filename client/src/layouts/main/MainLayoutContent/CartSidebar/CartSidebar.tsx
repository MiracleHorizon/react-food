import type { FC } from 'react'

import CartSidebarHeader from './CartSidebarHeader'
import CartSidebarContent from './CartSidebarContent'
import CartSidebarFooter from './CartSidebarFooter'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Sidebar from './CartSidebar.styled'

const CartSidebar: FC<EmotionClassNameProps> = ({ className }) => (
  <Sidebar.Root className={className}>
    <Sidebar.Wrapper>
      <CartSidebarHeader />
      <CartSidebarContent />
      <CartSidebarFooter />
    </Sidebar.Wrapper>
  </Sidebar.Root>
)

export default CartSidebar
