export interface BreadcrumbItem {
  title: string
  href: string
}

export interface Props {
  items: BreadcrumbItem[]
  separator?: string
  withFinishingSeparator?: boolean
}
