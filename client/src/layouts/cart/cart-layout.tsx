import type { FC } from 'react'

import LayoutHeader from './cart-header'
import HeadComponent from '@/components/HeadComponent'
import type { LayoutProps } from '@/types/LayoutProps'
import * as Layout from './cart-layout.styled'

const CartLayout: FC<LayoutProps> = ({ children, ...seoData }) => (
  <Layout.Root>
    <HeadComponent {...seoData} />
    <Layout.Content>
      <LayoutHeader />
      <Layout.Main>{children}</Layout.Main>
    </Layout.Content>
  </Layout.Root>
)

export default CartLayout
