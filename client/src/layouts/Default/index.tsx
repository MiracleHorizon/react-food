import Header from '@/layouts/Default/Header'
import HeadComponent from '@/components/HeadComponent'
import type { LayoutProps } from '@/models/LayoutProps'
import * as Layout from './DefaultLayout.styles'

const DefaultLayout = ({ children, title }: LayoutProps) => (
  <Layout.Root>
    <HeadComponent title={title} />
    <Layout.Content>
      <Header />
      <Layout.Main>{children}</Layout.Main>
    </Layout.Content>
  </Layout.Root>
)

export default DefaultLayout
