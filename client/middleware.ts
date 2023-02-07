import { NextRequest, NextResponse } from 'next/server'

import { authService } from '@/modules/auth'
import { UserRole } from '@/models/user-role'
import { Routes } from '@/types/routes'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

const privateRoutes = [Routes.DASHBOARD]
const authorizedRoutes = [Routes.ORDERS, Routes.CART]
const unauthorizedRoutes = [Routes.SIGNUP, Routes.SIGNIN]

export const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname as Routes
  const homeRoute = new URL(Routes.HOME, req.url)
  const signinRoute = new URL(Routes.SIGNIN, req.url)

  const homeRedirect = NextResponse.redirect(homeRoute)
  const signinRedirect = NextResponse.redirect(signinRoute)

  const refreshToken = req.cookies.get('refreshToken')

  if (refreshToken) {
    try {
      const { role: userRole } = await authService.fetchRole(refreshToken.value)

      if (userRole === UserRole.USER && privateRoutes.includes(pathname)) {
        return homeRedirect
      }

      if (unauthorizedRoutes.includes(pathname)) {
        return homeRedirect
      }
    } catch {
      if (pathname !== Routes.HOME) {
        return homeRedirect
      }
    }

    return
  }

  if (authorizedRoutes.includes(pathname) || privateRoutes.includes(pathname)) {
    return signinRedirect
  }

  return
}
