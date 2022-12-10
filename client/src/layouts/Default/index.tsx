import { ReactNode } from 'react'

import Header from '@/layouts/Default/Header'
import HeadComponent, { HeadProps } from '@/components/Head'
import * as Styled from './DefaultLayout.styles'

const DefaultLayout = ({ children, title }: LayoutProps) => (
  <Styled.Layout>
    <HeadComponent title={title} />
    <Styled.Content>
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </Styled.Content>
  </Styled.Layout>
)

export default DefaultLayout

export interface LayoutProps extends HeadProps {
  children: ReactNode
}
