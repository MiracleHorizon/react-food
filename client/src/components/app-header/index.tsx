import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { FC } from 'react'

import Divider from '@/ui/divider'
import type { ChildrenProps } from '@/models/ChildrenProps'
import * as Header from './AppHeader.styles'

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
      <Divider direction='horizontal' />
    </Header.Root>
  )
}

export default AppHeader
