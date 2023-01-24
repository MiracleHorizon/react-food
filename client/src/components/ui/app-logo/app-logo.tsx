import ReactSvg from '@/ui/svg/ReactSvg'
import { Routes } from '@/types/Routes'
import * as Logo from './app-logo.styled'

const AppLogo = () => (
  <Logo.Root data-el='app-logo'>
    <Logo.Link href={Routes.HOME}>
      <ReactSvg />
    </Logo.Link>
    <div>
      <Logo.Title>React.Еда</Logo.Title>
      <Logo.Slogan>самая вкусная еда во вселенной</Logo.Slogan>
    </div>
  </Logo.Root>
)

export default AppLogo
