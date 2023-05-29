import { type FC } from 'react'

import RootLayout from '@layouts/RootLayout'
import LayoutHeader from './MainLayoutHeader'
import LayoutContent from './MainLayoutContent'
import LayoutFooter from './MainLayoutFooter'
import type { LayoutProps } from '@app-types/LayoutProps'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Layout from './MainLayout.styled'

const MainLayout: FC<Props> = ({
  children,
  withSidePanels,
  className,
  ...seoData
}) => (
  <RootLayout {...seoData}>
    <Layout.Root>
      <Layout.Wrapper>
        <LayoutHeader />
        <LayoutContent withSidePanels={withSidePanels} className={className}>
          {children}
        </LayoutContent>
        <LayoutFooter />
      </Layout.Wrapper>
    </Layout.Root>
  </RootLayout>
)

export default MainLayout

interface Props extends LayoutProps, EmotionClassNameProps {
  withSidePanels: boolean
}
