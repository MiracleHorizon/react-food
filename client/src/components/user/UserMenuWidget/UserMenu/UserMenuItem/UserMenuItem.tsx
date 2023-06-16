import { type FC, memo } from 'react'

import type { Props } from './UserMenuItem.types'
import * as Item from './UserMenuItem.styled'

const UserMenuItem: FC<Props> = ({ title, onClose, href, action }) => {
  const handleClick = () => {
    action && action()
    onClose()
  }

  return (
    <Item.Root onClick={handleClick}>
      {href ? (
        <Item.Link href={href}>{title}</Item.Link>
      ) : (
        <Item.Caption>{title}</Item.Caption>
      )}
    </Item.Root>
  )
}

export default memo(UserMenuItem)
