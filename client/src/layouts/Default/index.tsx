import { ReactNode } from 'react'

import * as Styled from './DefaultLayout.styles'
import font from '@/public/font'

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <Styled.Layout className={font.className}>
      <Styled.Main>{children}</Styled.Main>
    </Styled.Layout>
  )
}

export default DefaultLayout

export interface LayoutProps {
  children: ReactNode
}
