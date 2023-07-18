import { type FC, memo } from 'react'

import type { Props } from './UserMenuItem.types'
import * as Item from './UserMenuItem.styled'

export const UserMenuItem: FC<Props> = memo(
  ({ title, onClose, href, action }) => {
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
)
