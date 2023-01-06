import type { FC } from 'react'

import Header from './header'
import Content from './content'
import HeadComponent from '@/components/HeadComponent'
import type { LayoutProps } from '@/models/LayoutProps'
import * as Layout from './DefaultLayout.styles'

const DefaultLayout: FC<LayoutProps> = ({ children, ...seoData }) => (
  <Layout.Root>
    <HeadComponent {...seoData} />
    <Layout.Container>
      <Header />
      <Content>{children}</Content>
    </Layout.Container>
  </Layout.Root>
)

export default DefaultLayout
