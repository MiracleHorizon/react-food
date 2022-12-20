import HeadComponent from '@/components/HeadComponent'
import Header from '@/layouts/Cart/Header'
import type { LayoutProps } from '@/models/LayoutProps'
import * as Layout from './CartLayout.styles'

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
