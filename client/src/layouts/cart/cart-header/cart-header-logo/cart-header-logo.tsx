import Link from 'next/link'

import ReactSvg from '@ui/svg/react-svg'
import { Routes } from '@router/routes.enum'
import { StyledLogo } from './cart-header-logo.styled'

const CartLayoutHeaderLogo = () => (
  <Link href={Routes.HOME}>
    <StyledLogo>
      React
      <ReactSvg />
      Еда
    </StyledLogo>
  </Link>
)

export default CartLayoutHeaderLogo
