import type { FC } from 'react'

import Head from '@components/seo/Head'
import CartLayoutHeader from './CartLayoutHeader'
import type { LayoutProps } from '@app-types/LayoutProps'
import * as Layout from './CartLayout.styled'

const CartLayout: FC<LayoutProps> = ({ children, className, ...seoData }) => (
  <>
    <Head {...seoData} />
    <Layout.Root className={className}>
      <CartLayoutHeader />
      <Layout.Main>{children}</Layout.Main>
    </Layout.Root>
  </>
)

export default CartLayout
