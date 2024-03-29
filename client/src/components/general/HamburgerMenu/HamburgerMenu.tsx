import { type FC, type PropsWithChildren, useCallback, useEffect } from 'react'
import { useEventListener } from 'usehooks-ts'

import { Portal } from '@components/general/Portal'
import { XMarkSvg } from '@ui/svg/XMarkSvg'
import { ThreeBarsSvg } from '@ui/svg/ThreeBarsSvg'
import { useToggle } from '@hooks/useToggle'
import { isBrowser } from '@helpers/isBrowser'
import { breakpoints } from '@styles/responsiveness/breakpoints'
import { HIDDEN_OVERFLOW_CLASSNAME } from '@styles/constants'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Menu from './HamburgerMenu.styled'

export const HamburgerMenu: FC<Props> = ({ children, className }) => {
  const { isOpen, close, toggle } = useToggle(false)

  const handlePressEscapeKey = useCallback(
    (e: KeyboardEvent) => e.key === 'Escape' && close(),
    [close]
  )

  const handleWindowResize = useCallback(() => {
    if (!isBrowser()) return
    const isTablet = window.innerWidth <= breakpoints.tablet
    if (!isTablet) close()
  }, [close])

  useEffect(() => {
    document.body.classList[isOpen ? 'add' : 'remove'](
      HIDDEN_OVERFLOW_CLASSNAME
    )

    return () => {
      document.body.classList.remove(HIDDEN_OVERFLOW_CLASSNAME)
    }
  }, [isOpen])

  useEventListener('keydown', handlePressEscapeKey)
  useEventListener('resize', handleWindowResize)

  return (
    <Menu.Root className={className}>
      <Menu.Button onClick={toggle}>
        {isOpen ? <XMarkSvg /> : <ThreeBarsSvg />}
      </Menu.Button>
      {isOpen && <Portal>{children}</Portal>}
    </Menu.Root>
  )
}

type Props = PropsWithChildren & EmotionClassNameProps
