import type { FC } from 'react'

import { useScrollProgress } from '@/hooks/useScrollProgress'
import type { ChildrenProps } from '@/types/children-props'
import * as Header from './app-header.styled'

const AppHeader: FC<ChildrenProps> = ({ children }) => {
  const { isScrollOnTop: isPageScrollOnTop } = useScrollProgress({
    positions: ['top']
  })

  return (
    <Header.Root isPageScrollOnTop={isPageScrollOnTop}>
      <Header.Content>{children}</Header.Content>
      {isPageScrollOnTop && <Header.Divider />}
    </Header.Root>
  )
}

export default AppHeader
