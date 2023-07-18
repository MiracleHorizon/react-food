import type { FC, PropsWithChildren } from 'react'

import { LeftSidebar } from './LeftSidebar'
import { useNavigationStore } from '@stores/navigationStore'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Content from './MainLayoutContent.styled'

export const MainLayoutContent: FC<Props> = ({
  children,
  withSidePanels,
  className
}) => {
  const isNavigationEmpty = useNavigationStore(state => state.isEmpty())

  return (
    <Content.Root className={className}>
      {!isNavigationEmpty && withSidePanels && <LeftSidebar />}
      <Content.Container>{children}</Content.Container>
      {!isNavigationEmpty && withSidePanels && <Content.CartSidebar />}
    </Content.Root>
  )
}

interface Props extends PropsWithChildren, EmotionClassNameProps {
  withSidePanels: boolean
}
