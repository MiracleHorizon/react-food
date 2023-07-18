import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { useDeinitializeUser } from '@stores/hooks/useDeinitializeUser'
import { RouteStatusHandler } from '@utils/RouteStatusHandler'
import { authService } from '@api/AuthService'
import { Routes } from '@router/Routes.enum'

export const useSignout = () => {
  const router = useRouter()

  const { deinitialize } = useDeinitializeUser()

  const signout = useCallback(() => {
    authService
      .signout()
      .then(deinitialize)
      .then(() => {
        const pathName = router.asPath as Routes
        const routeStatusHandler = new RouteStatusHandler(pathName)
        if (routeStatusHandler.isAuthorizedRoute()) {
          router.replace(Routes.HOME)
        }
      })
  }, [deinitialize, router])

  return { signout }
}
