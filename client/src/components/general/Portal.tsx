import { createPortal } from 'react-dom'
import type { FC, PropsWithChildren } from 'react'

import { isBrowser } from '@helpers/isBrowser'
import { ROOT_ELEMENT_ID } from '@constants/next'

const Portal: FC<PropsWithChildren> = ({ children }) => {
  if (!isBrowser()) {
    return null
  }

  return createPortal(
    children,
    document.getElementById(ROOT_ELEMENT_ID) as HTMLElement
  )
}

export default Portal
