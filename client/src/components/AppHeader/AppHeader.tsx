import type {FC} from 'react'
import {useEffect} from 'react'

import {useVerticalScrollProgress} from '@hooks/useVerticalScrollProgress'
import type {ChildrenProps} from '@app-types/ChildrenProps'
import * as Header from './AppHeader.styled'

import {useDeliveryStore} from '@stores/deliveryStore'

// TODO: MOCK VALUE
const AppHeader: FC<ChildrenProps> = ({ children }) => {
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

export default AppHeader
