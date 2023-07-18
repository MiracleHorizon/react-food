import type { FC } from 'react'

import { NavigationCatalog } from './NavigationCatalog'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Sidebar from './LeftSidebar.styled'

// TODO: Delivery
export const LeftSidebar: FC<EmotionClassNameProps> = props => (
  <Sidebar.Root {...props}>
    {/*<Sidebar.DeliveryInfo />*/}
    <NavigationCatalog />
  </Sidebar.Root>
)
