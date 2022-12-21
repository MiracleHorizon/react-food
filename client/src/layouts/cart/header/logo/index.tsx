import Link from 'next/link'
import Image from 'next/image'

import appLogo from '@/public/images/pizza-logo.png'
import * as Logo from './CartLayoutHeaderLogo.styles'

const CartLayoutHeaderLogo = () => (
  <Link href='/'>
    <Logo.Root>
      <Logo.Title>
        React
        <Image width={24} height={24} src={appLogo.src} alt='Logo picture' />
        Еда
      </Logo.Title>
    </Logo.Root>
  </Link>
)

export default CartLayoutHeaderLogo
