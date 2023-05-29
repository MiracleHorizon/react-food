import type { FC, PropsWithChildren } from 'react'

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

interface Props extends PropsWithChildren, EmotionClassNameProps {
  withSidePanels: boolean
}
