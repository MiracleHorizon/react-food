import type { FC } from 'react'

import Header from './header'
import HeadComponent from '@/components/head'
import type { LayoutProps } from '@/models/LayoutProps'
import * as Layout from './CartLayout.styles'

const CartLayout: FC<LayoutProps> = ({ children, title }) => (
  <Layout.Root>
    <HeadComponent title={title} />
    <Layout.Content>
      <Header />
      <Layout.Main>{children}</Layout.Main>
    </Layout.Content>
  </Layout.Root>
)

export default CartLayout
