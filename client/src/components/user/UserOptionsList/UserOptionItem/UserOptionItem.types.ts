export type Props = ItemWithLink | ItemWithAction

interface CommonItem {
  title: string
  universalClickAction?: VoidFunction
}

interface ItemWithLink extends CommonItem {
  href: string
  action?: never
}

interface ItemWithAction extends CommonItem {
  action: () => void
  href?: never
}
