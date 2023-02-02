import { FC, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import type { ChildrenProps } from '@/types/children-props'
import * as Header from './app-header.styled'

const AppHeader: FC<ChildrenProps> = ({ children }) => {
  const [isPageScrollOnTop, setPageScrollOnTop] = useState(true)
  const { scrollY } = useScroll()

  const handleScrollPosition = (latest: number) => {
    if (isPageScrollOnTop && latest > 10) {
      setPageScrollOnTop(false)
    }

    if (!isPageScrollOnTop && latest <= 10) {
      setPageScrollOnTop(true)
    }
  }

  useMotionValueEvent(scrollY, 'change', handleScrollPosition)

  return (
    <Header.Root isScrollOnTop={isPageScrollOnTop}>
      <Header.Content>{children}</Header.Content>
      {isPageScrollOnTop && <Header.Divider />}
    </Header.Root>
  )
}

export default AppHeader
