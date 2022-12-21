import HeadComponent from '@/components/head'
import Header from '@/layouts/cart/header'
import type { LayoutProps } from '@/models/LayoutProps'
import * as Layout from '@/layouts//cart/CartLayout.styles'

const CartLayout = ({ children, title }: LayoutProps) => (
  <Layout.Root>
    <HeadComponent title={title} />
    <Layout.Content>
      <Header />
      <Layout.Main>{children}</Layout.Main>
    </Layout.Content>
  </Layout.Root>
)

export default CartLayout
