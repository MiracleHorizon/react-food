import Header from '@/layouts/default/header'
import HeadComponent from '@/components/head'
import type { LayoutProps } from '@/models/LayoutProps'
import * as Layout from '@/layouts/default/DefaultLayout.styles'

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
