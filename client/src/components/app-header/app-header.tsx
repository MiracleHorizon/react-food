import { useScroll } from 'framer-motion'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

import type { ChildrenProps } from '@/types/ChildrenProps'
import * as Header from './app-header.styled'

const AppHeader: FC<ChildrenProps> = ({ children }) => {
  const [isScrollOnTop, setScrollOnTop] = useState(true)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.onChange(latest => {
      if (isScrollOnTop && latest > 10) {
        setScrollOnTop(false)
      }

      if (!isScrollOnTop && latest <= 10) {
        setScrollOnTop(true)
      }
    })
  }, [scrollY, isScrollOnTop])

  return (
    <Header.Root isScrollOnTop={isScrollOnTop}>
      <Header.Content>{children}</Header.Content>
      {isScrollOnTop && <Header.Divider />}
    </Header.Root>
  )
}

export default AppHeader
