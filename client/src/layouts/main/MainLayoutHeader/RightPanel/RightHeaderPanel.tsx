import { useMemo } from 'react'
import { useRouter } from 'next/router'
import MediaQuery from 'react-responsive'

import { UserMenuWidget } from '@components/user/UserMenuWidget'
import { OrdersLabel } from '@components/order/OrdersLabel'
import { CartLabel } from './CartLabel'
import { useUserStore } from '@stores/userStore'
import { RouteStatusHandler } from '@utils/RouteStatusHandler'
import { Routes } from '@router/Routes.enum'
import { breakpoints } from '@styles/responsiveness/breakpoints'
import * as Panel from './RightHeaderPanel.styled'

export const RightHeaderPanel = () => {
  const { asPath } = useRouter()
  const isAuth = useUserStore(state => state.isAuth())

  const routeStatusHandler = useMemo(
    () => new RouteStatusHandler(asPath as Routes),
    [asPath]
  )
  const isRouteWithShowcase = routeStatusHandler.isShowcaseRoute()

  return (
    <Panel.Root>
      <Panel.Content>
        <OrdersLabel />
        <CartLabel />
        <UserMenuWidget />
      </Panel.Content>
      {isAuth && (
        <MediaQuery maxWidth={breakpoints.tablet}>
          <Panel.SignoutButton />
        </MediaQuery>
      )}
      {isRouteWithShowcase && <Panel.NavigationMenu />}
    </Panel.Root>
  )
}
