import type { FC } from 'react'

import HeadComponent from '@/components/HeadComponent'
import type { LayoutProps } from '@/types/layout-props'
import * as Layout from './auth-layout.styled'

const AuthLayout: FC<LayoutProps> = ({ children, ...seoData }) => (
  <Layout.Root>
    <HeadComponent {...seoData} />
    {children}
  </Layout.Root>
)

export default AuthLayout
