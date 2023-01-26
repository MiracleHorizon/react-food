import { useMotionValueEvent, useScroll } from 'framer-motion'
import { FC, useState } from 'react'

import type { ChildrenProps } from '@/types/ChildrenProps'
import * as Header from './app-header.styled'

const AppHeader: FC<ChildrenProps> = ({ children }) => {
  const [isPageScrollOnTop, setPageScrollOnTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    if (isPageScrollOnTop && latest > 10) {
      setPageScrollOnTop(false)
    }

    if (!isPageScrollOnTop && latest <= 10) {
      setPageScrollOnTop(true)
    }
  })

  return (
    <Header.Root isScrollOnTop={isPageScrollOnTop}>
      <Header.Content>{children}</Header.Content>
      {isPageScrollOnTop && <Header.Divider />}
    </Header.Root>
  )
}

export default AppHeader
