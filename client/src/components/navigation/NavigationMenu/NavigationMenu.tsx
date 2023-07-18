import dynamic from 'next/dynamic'

import { HamburgerMenu } from '@components/general/HamburgerMenu'
import { useNavigationStore } from '@stores/navigationStore'
import * as Menu from './NavigationMenu.styled'

const Navigation = dynamic(
  import('../Navigation').then(mod => mod.Navigation),
  { ssr: false }
)

// TODO: Skeleton
export const NavigationMenu = () => {
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
