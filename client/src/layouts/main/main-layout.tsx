import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'

import LayoutHeader from './main-header'
import LayoutContent from './main-content'
import LayoutFooter from './main-footer'
import HeadComponent from '@/components/HeadComponent'
import { useChangeRoute } from '@/hooks/useChangeRoute'
import { HIDDEN_OVERFLOW_CLASSNAME } from '@/utils/constants/styles'
import type { LayoutProps } from '@/types/LayoutProps'
import * as Layout from './main-layout.styled'

const ChangeRouteLoader = dynamic(import('@/ui/change-route-loader'), {
  ssr: false
})

const animations = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const MainLayout: FC<LayoutProps> = ({ children, ...seoData }) => {
  const isPageLoading = useChangeRoute()

  useEffect(() => {
    isPageLoading
      ? document.body.classList.add(HIDDEN_OVERFLOW_CLASSNAME)
      : document.body.classList.remove(HIDDEN_OVERFLOW_CLASSNAME)

    return () => {
      document.body.classList.remove(HIDDEN_OVERFLOW_CLASSNAME)
    }
  }, [isPageLoading])

  return (
    <>
      {isPageLoading && <ChangeRouteLoader />}
      <HeadComponent {...seoData} />
      <Layout.Root initial='hidden' animate='show' variants={animations}>
        <Layout.Container>
          <LayoutHeader />
          <LayoutContent>{children}</LayoutContent>
          <LayoutFooter />
        </Layout.Container>
      </Layout.Root>
    </>
  )
}

export default MainLayout
