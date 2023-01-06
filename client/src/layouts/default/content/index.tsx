import type { FC, ReactNode } from 'react'

import LeftPanel from './left-panel'
import * as Content from './DefaultLayoutContent.styles'

const DefaultLayoutContent: FC<Props> = ({ children }) => (
  <Content.Root>
    <LeftPanel />
    {children}
  </Content.Root>
)

export default DefaultLayoutContent

interface Props {
  children: ReactNode
}
