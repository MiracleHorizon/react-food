export type Props = ItemWithLink | ItemWithAction

interface CommonItem {
  title: string
  onClose: VoidFunction
}

interface ItemWithLink extends CommonItem {
  href: string
  action?: never
}

interface ItemWithAction extends CommonItem {
  action: () => void
  href?: never
}
