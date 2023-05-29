import { createPortal } from 'react-dom'
import type { FC, PropsWithChildren } from 'react'

import { checkIsClient } from '@helpers/checkIsClient'
import { ROOT_ELEMENT_ID } from '@constants/next'

const Portal: FC<PropsWithChildren> = ({ children }) => {
  if (!checkIsClient()) {
    return null
  }

  return createPortal(
    children,
    document.getElementById(ROOT_ELEMENT_ID) as HTMLElement
  )
}

export default Portal
