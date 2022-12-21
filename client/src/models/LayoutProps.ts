import { ReactNode } from 'react'

import type { HeadProps } from '@/components/head/HeadComponent.types'

export interface LayoutProps extends HeadProps {
  children: ReactNode
}
