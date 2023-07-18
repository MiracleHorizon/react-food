import {type FC, type PropsWithChildren, useEffect} from 'react'

import {useVerticalScrollProgress} from '@hooks/useVerticalScrollProgress'
import * as Header from './AppHeader.styled'

import {useDeliveryStore} from '@stores/deliveryStore'

// TODO: MOCK VALUE
export const AppHeader: FC<PropsWithChildren> = ({ children }) => {
  const { isScrollOnTop: isPageScrollOnTop } = useVerticalScrollProgress({
    positions: ['top']
  })

  const initialize = useDeliveryStore(state => state.initialize)

  useEffect(() => {
    initialize({
      serviceFee: 39,
      costRange: { start: 0, end: 149 },
      freeCostMark: 500,
      timeRange: {
        start: 20,
        end: 40
      },
      distance: 4000
    })
  }, [initialize])

  return (
    <Header.Root isPageScrollOnTop={isPageScrollOnTop}>
      <Header.Content>{children}</Header.Content>
      {isPageScrollOnTop && <Header.Divider />}
    </Header.Root>
  )
}
