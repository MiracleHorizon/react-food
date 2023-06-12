import { type FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import Head from '@components/seo/Head'
import MobileMenu from './MobileMenu'
import { useChangeRoute } from '@hooks/useChangeRoute'
import {
  HIDDEN_OVERFLOW_CLASSNAME,
  POINTER_EVENTS_NONE_CLASSNAME
} from '@styles/constants'
import type { LayoutProps } from '@app-types/LayoutProps'

// TODO: Set timeout
const ChangeRouteLoader = dynamic(
  import('@components/general/ChangeRouteLoader'),
  {
    ssr: false
  }
)

const loadingClassNames = [
  HIDDEN_OVERFLOW_CLASSNAME,
  POINTER_EVENTS_NONE_CLASSNAME
]

const RootLayout: FC<LayoutProps> = ({ children, className, ...seoData }) => {
  const { isPageLoading } = useChangeRoute()

  useEffect(() => {
    document.body.classList[isPageLoading ? 'add' : 'remove'](
      ...loadingClassNames
    )

    return () => {
      document.body.classList.remove(...loadingClassNames)
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
