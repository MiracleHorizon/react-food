import dynamic from 'next/dynamic'
import type { FC } from 'react'

import { HamburgerMenu } from '@components/general/HamburgerMenu'
import { useNavigationStore } from '@stores/navigationStore'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Menu from './NavigationMenu.styled'

const Navigation = dynamic(
  import('../Navigation').then(mod => mod.Navigation),
  { ssr: false }
)

// TODO: Skeleton
export const NavigationMenu: FC<EmotionClassNameProps> = props => {
  const isNavigationEmpty = useNavigationStore(state => state.isEmpty())

  if (isNavigationEmpty) {
    return null
  }

  return (
    <HamburgerMenu {...props}>
      <Menu.Root>
        <Menu.Content>
          <Navigation />
        </Menu.Content>
      </Menu.Root>
    </HamburgerMenu>
  )
}
