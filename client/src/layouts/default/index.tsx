import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'

import Header from './header'
import Content from './content'
import Footer from './footer'
import HeadComponent from '@/components/HeadComponent'
import { useChangeRoute } from '@/hooks/useChangeRoute'
import { HIDDEN_OVERFLOW_CLASSNAME } from '@/utils/constants/styles'
import type { LayoutProps } from '@/models/LayoutProps'
import * as Layout from './DefaultLayout.styles'

const ChangeRouteLoader = dynamic(import('@/ui/change-route-loader'), {
  ssr: false
})

// TODO Вынести вывод лоадера из основного шаблона в корневой компонент приложения
const DefaultLayout: FC<LayoutProps> = ({ children, ...seoData }) => {
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
      <Layout.Root>
        <Layout.Container>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Layout.Container>
      </Layout.Root>
    </>
  )
}

export default DefaultLayout
