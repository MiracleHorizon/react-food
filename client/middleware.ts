import { NextRequest } from 'next/server'

import { RoutesAccessHandler } from '@utils/RoutesAccessHandler'

export const middleware = async (req: NextRequest) => {
  const routesAccessHandler = new RoutesAccessHandler(req)
  return routesAccessHandler.handleRouteAccess()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
