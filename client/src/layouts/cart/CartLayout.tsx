import type { FC } from 'react'

import RootLayout from '@layouts/Root'
import CartLayoutHeader from './CartLayoutHeader'
import type { LayoutProps } from '@app-types/LayoutProps'
import * as Layout from './CartLayout.styled'

const CartLayout: FC<LayoutProps> = ({ children, className, ...seoData }) => (
  <RootLayout {...seoData}>
    <Layout.Root className={className}>
      <CartLayoutHeader />
      <Layout.Main>{children}</Layout.Main>
    </Layout.Root>
  </RootLayout>
)

export default CartLayout
