import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useChangeRoute = () => {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = useState(false)

  const handleStartLoading = useCallback(
    (url: string) => {
      url !== router.asPath && setIsPageLoading(true)
    },
    [router.asPath]
  )

  const handleCompleteLoading = useCallback(
    (url: string) => {
      url === router.asPath && setIsPageLoading(false)
    },
    [router.asPath]
  )

  useEffect(() => {
    router.events.on('routeChangeStart', handleStartLoading)
    router.events.on('routeChangeComplete', handleCompleteLoading)
    router.events.on('routeChangeError', handleCompleteLoading)

    return () => {
      router.events.off('routeChangeStart', handleStartLoading)
      router.events.off('routeChangeComplete', handleCompleteLoading)
      router.events.off('routeChangeError', handleCompleteLoading)
    }
  })

  return isPageLoading
}
