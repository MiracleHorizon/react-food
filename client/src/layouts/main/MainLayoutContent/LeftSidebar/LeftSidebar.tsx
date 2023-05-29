import type { FC } from 'react'

import NavigationCatalog from './NavigationCatalog'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Sidebar from './LeftSidebar.styled'

const LeftSidebar: FC<EmotionClassNameProps> = ({ className }) => (
  <Sidebar.Root className={className}>
    {/*<Sidebar.DeliveryInfo />*/}
    <NavigationCatalog />
  </Sidebar.Root>
)

export default LeftSidebar
