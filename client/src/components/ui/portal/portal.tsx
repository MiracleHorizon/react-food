import { createPortal } from 'react-dom'
import type { FC } from 'react'

import type { ChildrenProps } from '@/types/ChildrenProps'

const Portal: FC<ChildrenProps> = ({ children }) =>
  createPortal(children, document.getElementById('__next') as HTMLElement)

export default Portal
