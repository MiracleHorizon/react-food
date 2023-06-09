import { type FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import Head from '@components/seo/Head'
import MobileMenu from './MobileMenu'
import { useChangeRoute } from '@hooks/useChangeRoute'
import {
  HIDDEN_OVERFLOW_CLASSNAME,
  POINTER_EVENTS_NONE_CLASSNAME
} from '@styles/constants'
import type { LayoutProps } from '@app-types/LayoutProps' // TODO: Set timeout

// TODO: Set timeout
const ChangeRouteLoader = dynamic(
  import('@components/general/ChangeRouteLoader'),
  {
    ssr: false
  }
)

const RootLayout: FC<LayoutProps> = ({ children, className, ...seoData }) => {
  const { isPageLoading } = useChangeRoute()

  useEffect(() => {
    if (isPageLoading) {
      document.body.classList.add(HIDDEN_OVERFLOW_CLASSNAME)
      document.body.classList.add(POINTER_EVENTS_NONE_CLASSNAME)
    } else {
      document.body.classList.remove(HIDDEN_OVERFLOW_CLASSNAME)
      document.body.classList.remove(POINTER_EVENTS_NONE_CLASSNAME)
    }

    return () => {
      document.body.classList.remove(HIDDEN_OVERFLOW_CLASSNAME)
      document.body.classList.remove(POINTER_EVENTS_NONE_CLASSNAME)
    }
  }, [isPageLoading])

  return (
    <>
      {isPageLoading && <ChangeRouteLoader />}
      <Head {...seoData} />
      {children}
      <MobileMenu />
    </>
  )
}

export default RootLayout
