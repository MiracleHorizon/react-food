import {type FC, useEffect} from 'react'
import dynamic from 'next/dynamic'

import Head from '@components/seo/Head'
import MobileFooterMenu from './mobile'
import {useChangeRoute} from '@hooks/useChangeRoute'
import type {LayoutProps} from '@app-types/LayoutProps'
import {HIDDEN_OVERFLOW_CLASSNAME} from '@styles/constants'

// TODO: Set timeout
const ChangeRouteLoader = dynamic(import('@components/ChangeRouteLoader'), {
  ssr: false
})

const RootLayout: FC<LayoutProps> = ({ children, className, ...seoData }) => {
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
      <Head {...seoData} />
      {children}
      <MobileFooterMenu />
    </>
  )
}

export default RootLayout
