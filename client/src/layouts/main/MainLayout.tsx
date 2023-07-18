import { type FC } from 'react'

import { RootLayout } from '@layouts/Root'
import { MainLayoutHeader } from './MainLayoutHeader'
import { MainLayoutContent } from './MainLayoutContent'
import { useFetchNavigation } from '@hooks/useFetchNavigation'
import type { LayoutProps } from '@app-types/LayoutProps'
import * as Layout from './MainLayout.styled'

export const MainLayout: FC<Props> = ({
  children,
  withSidePanels,
  className,
  ...seoData
}) => {
  useFetchNavigation()

  return (
    <RootLayout {...seoData}>
      <Layout.Root>
        <Layout.Wrapper>
          <MainLayoutHeader />
          <MainLayoutContent
            withSidePanels={withSidePanels}
            className={className}
          >
            {children}
          </MainLayoutContent>
        </Layout.Wrapper>
      </Layout.Root>
    </RootLayout>
  )
}

interface Props extends LayoutProps {
  withSidePanels: boolean
}
