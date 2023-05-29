import type { FC } from 'react'

import type { ChildrenProps } from '@app-types/ChildrenProps'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Content from './MainLayoutContent.styled'

const MainLayoutContent: FC<Props> = ({
  children,
  withSidePanels,
  className
}) => (
  <Content.Root className={className}>
    {withSidePanels && <Content.LeftSidebar />}
    {children}
    {withSidePanels && <Content.CartSidebar />}
  </Content.Root>
)

export default MainLayoutContent

interface Props extends ChildrenProps, EmotionClassNameProps {
  withSidePanels: boolean
}
