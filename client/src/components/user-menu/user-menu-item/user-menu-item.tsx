import type { FC } from 'react'

import * as Item from './user-menu-item.styled'

const UserMenuItem: FC<Props> = ({ title, href, action, onClose }) => {
  const handleClick = () => {
    action && action()
    onClose()
  }

  return (
    <Item.Root variants={Item.animation} onClick={handleClick}>
      {href ? (
        <Item.Link href={href}>{title}</Item.Link>
      ) : (
        <Item.Caption>{title}</Item.Caption>
      )}
    </Item.Root>
  )
}

export default UserMenuItem

type Props = ItemWithLink | ItemWithAction

interface CommonItem {
  title: string
  onClose: () => void
}

interface ItemWithLink extends CommonItem {
  href: string
  action?: never
}

interface ItemWithAction extends CommonItem {
  action: () => void
  href?: never
}
