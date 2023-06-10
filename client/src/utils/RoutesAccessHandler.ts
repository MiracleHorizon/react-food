import { NextRequest, NextResponse } from 'next/server'
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import { authService } from '@api/AuthService'
import { RouteStatusHandler } from '@utils/RouteStatusHandler'
import { UserRole } from '@models/UserRole'
import { Routes } from '@router/Routes.enum'
import { REFRESH_TOKEN_COOKIE_NAME } from '@constants/cookie'

export class RoutesAccessHandler {
  private readonly nextRequest: NextRequest
  private readonly routePathnameHandler: RouteStatusHandler

  constructor(nextRequest: NextRequest) {
    this.nextRequest = nextRequest
    this.routePathnameHandler = new RouteStatusHandler(this.routePathname)
  }

  public async handleRouteAccess(): Promise<NextResponse> {
    const refreshToken = this.extractRefreshTokenCookie()

    if (!refreshToken) {
      return this.isRouteWithRequiredAuth()
        ? this.signinRouteRedirect
        : NextResponse.next()
    }

    return this.handleUserRole(refreshToken.value)
  }

  private extractRefreshTokenCookie(): RequestCookie | null {
    return this.nextRequest.cookies.get(REFRESH_TOKEN_COOKIE_NAME) || null
  }

  private async handleUserRole(refreshToken: string): Promise<NextResponse> {
    try {
      const { userRole } = await authService.fetchRole(refreshToken)

      const isPrivateRoute = this.routePathnameHandler.isPrivateRoute()
      const isUnauthorizedRoute =
        this.routePathnameHandler.isUnauthorizedRoute()

      if (isPrivateRoute && userRole === UserRole.USER) {
        return this.homeRouteRedirect
      }

      if (isUnauthorizedRoute) {
        return this.homeRouteRedirect
      }

      return NextResponse.next()
    } catch (e) {
      console.error(e)

      if (this.routePathname !== Routes.HOME) {
        return this.homeRouteRedirect
      }

      return NextResponse.next()
    }
  }

  private get routePathname(): Routes {
    return this.nextRequest.nextUrl.pathname as Routes
  }

  private isRouteWithRequiredAuth(): Boolean {
    const isPrivateRoute = this.routePathnameHandler.isPrivateRoute()
    const isAuthorizedRoute = this.routePathnameHandler.isAuthorizedRoute()
    return isPrivateRoute || isAuthorizedRoute
  }

  private get homeRouteRedirect(): NextResponse {
    return this.getNextResponseRedirect(this.homeRouteUrl)
  }

  private get signinRouteRedirect(): NextResponse {
    return this.getNextResponseRedirect(this.signinRouteUrl)
  }

  private getNextResponseRedirect(routeUrl: URL): NextResponse {
    return NextResponse.redirect(routeUrl)
  }

  private get homeRouteUrl(): URL {
    return this.generateRouteUrl(Routes.HOME)
  }

  private get signinRouteUrl(): URL {
    return this.generateRouteUrl(Routes.SIGNIN)
  }

  private generateRouteUrl(route: Routes): URL {
    return new URL(route, this.nextRequest.url)
  }
}
