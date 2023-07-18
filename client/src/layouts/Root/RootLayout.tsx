import dynamic from 'next/dynamic'
import type { FC } from 'react'

import { Head } from '@components/seo/Head'
import type { LayoutProps } from '@app-types/LayoutProps'
import * as Layout from './RootLayout.styled'

const MobileMenu = dynamic(
  import('./MobileMenu').then(mod => mod.MobileMenu),
  { ssr: false }
)
const BackTopButton = dynamic(
  import('@components/general/BackTopButton').then(mod => mod.BackTopButton),
  { ssr: false }
)

export const RootLayout: FC<LayoutProps> = ({
  children,
  className,
  ...seoData
}) => (
  <Layout.Root>
    <Head {...seoData} />
    <MobileMenu />
    <BackTopButton />
    {children}
  </Layout.Root>
)
