import Link from 'next/link'

import ReactSvg from '@/ui/svg/ReactSvg'
import Logo from './CartLayoutHeaderLogo.styles'

const CartLayoutHeaderLogo = () => (
  <Link href='/'>
    <Logo>
      React
      <ReactSvg />
      Еда
    </Logo>
  </Link>
)

export default CartLayoutHeaderLogo
