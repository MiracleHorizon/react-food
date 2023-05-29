import type { FC } from 'react'

import Head from '@components/seo/Head'
import AuthLayoutContent from './AuthLayoutContent'
import type { LayoutProps } from '@app-types/LayoutProps'
import { Root } from './AuthLayout.styled'

const AuthLayout: FC<LayoutProps> = ({ children, ...seoData }) => (
  <>
    <Head {...seoData} />
    <Root>
      <AuthLayoutContent>{children}</AuthLayoutContent>
    </Root>
  </>
)

export default AuthLayout
