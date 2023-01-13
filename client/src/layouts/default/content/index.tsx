import type { FC } from 'react'

import LeftPanel from './left-panel'
import RightPanel from './right-panel'
import type { ChildrenProps } from '@/models/ChildrenProps'
import * as Content from './DefaultLayoutContent.styles'

const DefaultLayoutContent: FC<ChildrenProps> = ({ children }) => (
  <Content.Root>
    <LeftPanel />
    {children}
    <RightPanel />
  </Content.Root>
)

export default DefaultLayoutContent
