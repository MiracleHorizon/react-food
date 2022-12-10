import Link from 'next/link'
import Image from 'next/image'

import * as Logo from './AppLogo.styles'
import logo from '@/public/images/pizza-logo.png'

const AppLogo = () => (
  <Logo.Root>
    <Link href='/'>
      <Image src={logo.src} width={44} height={44} alt='Logo' />
    </Link>
    <div>
      <Logo.Title>React.Еда</Logo.Title>
      <Logo.Slogan>самая вкусная еда во вселенной</Logo.Slogan>
    </div>
  </Logo.Root>
)

export default AppLogo
