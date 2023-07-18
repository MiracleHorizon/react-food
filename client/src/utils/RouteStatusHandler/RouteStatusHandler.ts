import { Routes } from '@router/Routes.enum'

export class RouteStatusHandler {
  private readonly PRIVATE_ROUTES: Routes[] = [Routes.DASHBOARD]
  private readonly AUTHORIZED_ROUTES: Routes[] = [
    Routes.ORDERS,
    Routes.CART,
    Routes.DASHBOARD
  ]
  private readonly UNAUTHORIZED_ROUTES: Routes[] = [
    Routes.SIGNIN,
    Routes.SIGNUP
  ]
  private readonly SHOWCASE_ROUTES: Routes[] = [
    Routes.HOME,
    Routes.CATEGORY,
    Routes.SEARCH
  ]

  constructor(private readonly routePathname: Routes) {}

  public isPrivateRoute(): boolean {
    return this.PRIVATE_ROUTES.includes(this.routePathname)
  }

  public isAuthorizedRoute(): boolean {
    return this.AUTHORIZED_ROUTES.includes(this.routePathname)
  }

  public isUnauthorizedRoute(): boolean {
    return this.UNAUTHORIZED_ROUTES.includes(this.routePathname)
  }

  public isShowcaseRoute(): boolean {
    return (
      this.SHOWCASE_ROUTES.includes(this.routePathname) ||
      this.SHOWCASE_ROUTES.some(route =>
        route === Routes.HOME
          ? this.routePathname === Routes.HOME
          : this.routePathname.startsWith(route)
      )
    ) // NOTE: Дополнительная проверка необходима из-за динамических параметров пути
  }
}
