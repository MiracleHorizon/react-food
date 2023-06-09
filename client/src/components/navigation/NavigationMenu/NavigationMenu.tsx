import Navigation from '../Navigation'
import HamburgerMenu from '@components/general/HamburgerMenu'
import { useNavigationStore } from '@stores/navigationStore'
import * as Menu from './NavigationMenu.styled'

const NavigationMenu = () => {
  const isNavigationEmpty = useNavigationStore(state => state.isEmpty())

  if (isNavigationEmpty) {
    return null
  }

  return (
    <HamburgerMenu>
      <Menu.Root>
        <Menu.Content>
          <Navigation />
        </Menu.Content>
      </Menu.Root>
    </HamburgerMenu>
  )
}

export default NavigationMenu
