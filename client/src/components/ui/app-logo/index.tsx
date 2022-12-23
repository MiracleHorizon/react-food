import Link from 'next/link'

import ReactSvg from '@/ui/svg/ReactSvg'
import * as Logo from './AppLogo.styles'

const AppLogo = () => (
  <Logo.Root>
    <Link href='/'>
      <ReactSvg />
    </Link>
    <div>
      <Logo.Title>React.Еда</Logo.Title>
      <Logo.Slogan>самая вкусная еда во вселенной</Logo.Slogan>
    </div>
  </Logo.Root>
)

export default AppLogo
