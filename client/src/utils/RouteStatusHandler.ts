import { Routes } from '@router/Routes.enum'

export class RouteStatusHandler {
  private readonly PRIVATE_ROUTES: Routes[] = [Routes.DASHBOARD]
  private readonly AUTHORIZED_ROUTES: Routes[] = [Routes.ORDERS, Routes.CART]
  private readonly UNAUTHORIZED_ROUTES: Routes[] = [
    Routes.SIGNIN,
    Routes.SIGNUP
  ]

  constructor(private readonly routePathname: Routes) {}

  public isPrivateRoute(): Boolean {
    return this.PRIVATE_ROUTES.includes(this.routePathname)
  }

  public isAuthorizedRoute(): Boolean {
    return this.AUTHORIZED_ROUTES.includes(this.routePathname)
  }

  public isUnauthorizedRoute(): Boolean {
    return this.UNAUTHORIZED_ROUTES.includes(this.routePathname)
  }
}
