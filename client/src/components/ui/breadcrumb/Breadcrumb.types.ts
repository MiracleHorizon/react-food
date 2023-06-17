import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

export interface BreadcrumbItem {
  title: string
  href: string
}

export interface Props extends EmotionClassNameProps {
  items: BreadcrumbItem[]
  separator?: string
  withFinishingSeparator?: boolean
}
