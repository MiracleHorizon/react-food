import type { FC } from 'react'

import LeftPanel from './left-panel'
import type { ChildrenProps } from '@/models/ChildrenProps'
import * as Content from './DefaultLayoutContent.styles'

const DefaultLayoutContent: FC<ChildrenProps> = ({ children }) => (
  <Content.Root>
    <LeftPanel />
    {children}
  </Content.Root>
)

export default DefaultLayoutContent
