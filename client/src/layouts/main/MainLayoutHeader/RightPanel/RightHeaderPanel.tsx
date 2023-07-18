import { useMemo } from 'react'
import { useRouter } from 'next/router'

import { UserMenuWidget } from '@components/user/UserMenuWidget'
import { OrdersLabel } from '@components/order/OrdersLabel'
import { NavigationMenu } from '@components/navigation/NavigationMenu'
import { CartLabel } from './CartLabel'
import { RouteStatusHandler } from '@utils/RouteStatusHandler'
import { Routes } from '@router/Routes.enum'
import * as Panel from './RightHeaderPanel.styled'

export const RightHeaderPanel = () => {
  const { asPath } = useRouter()

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
      {isRouteWithShowcase && <NavigationMenu />}
    </Panel.Root>
  )
}
