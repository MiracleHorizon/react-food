import { NextRequest, NextResponse } from 'next/server'
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import { authService } from '@api/AuthService'
import { UserRole } from '@models/UserRole'
import { Routes } from '@router/Routes.enum'

export class RoutesAccessHandler {
  private readonly REFRESH_TOKEN_COOKIE_NAME: string = 'refreshToken'
  private readonly PRIVATE_ROUTES: Routes[] = [Routes.DASHBOARD]
  private readonly AUTHORIZED_ROUTES: Routes[] = [Routes.ORDERS, Routes.CART]
  private readonly UNAUTHORIZED_ROUTES: Routes[] = [
    Routes.SIGNIN,
    Routes.SIGNUP
  ]

  constructor(private readonly nextRequest: NextRequest) {}

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
    return this.nextRequest.cookies.get(this.REFRESH_TOKEN_COOKIE_NAME) || null
  }

  private async handleUserRole(refreshToken: string): Promise<NextResponse> {
    try {
      const { userRole } = await authService.fetchUserRole(refreshToken)

      if (this.isPrivateRoute() && userRole === UserRole.USER) {
        return this.homeRouteRedirect
      }

      if (this.isUnauthorizedRoute()) {
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
    return this.isPrivateRoute() || this.isAuthorizedRoute()
  }

  private isPrivateRoute(): Boolean {
    return this.PRIVATE_ROUTES.includes(this.routePathname)
  }

  private isAuthorizedRoute(): Boolean {
    return this.AUTHORIZED_ROUTES.includes(this.routePathname)
  }

  private isUnauthorizedRoute(): Boolean {
    return this.UNAUTHORIZED_ROUTES.includes(this.routePathname)
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
