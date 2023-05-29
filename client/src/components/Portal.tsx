import {createPortal} from 'react-dom'
import type {FC} from 'react'

import {checkIsClient} from '@helpers/checkIsClient'
import {ROOT_ELEMENT_ID} from '@constants/next'
import type {ChildrenProps} from '@app-types/ChildrenProps'

// TODO: SSR?
const Portal: FC<ChildrenProps> = ({ children }) => {
  if (!checkIsClient()) {
    return null
  }

  return createPortal(
    children,
    document.getElementById(ROOT_ELEMENT_ID) as HTMLElement
  )
}

export default Portal
