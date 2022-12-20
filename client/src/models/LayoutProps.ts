import { ReactNode } from 'react'

import type { HeadProps } from '@/components/HeadComponent/HeadComponent.types'

export interface LayoutProps extends HeadProps {
  children: ReactNode
}
