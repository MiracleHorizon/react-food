import { useMemo } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { UserSection } from './UserSection'
import { useNavigationStore } from '@stores/navigationStore'
import { RouteStatusHandler } from '@utils/RouteStatusHandler'
import { Routes } from '@router/Routes.enum'
import * as Drawer from './Drawer.styled'

// TODO: Loader
const Navigation = dynamic(
  import('@components/general/Navigation').then(mod => mod.Navigation),
  { ssr: false }
)

const DrawerComponent = () => {
  const { asPath } = useRouter()

  const isNavigationEmpty = useNavigationStore(state => state.isEmpty())

  const routeStatusHandler = useMemo(() => {
    return new RouteStatusHandler(asPath as Routes)
  }, [asPath])
  const isRouteWithShowcase = routeStatusHandler.isShowcaseRoute()

  return (
    <Drawer.Root>
      <Drawer.Content>
        <UserSection />
        {!isNavigationEmpty && isRouteWithShowcase && (
          <>
            <Drawer.Divider />
            <Navigation />
          </>
        )}
      </Drawer.Content>
    </Drawer.Root>
  )
}

export { DrawerComponent as Drawer }
