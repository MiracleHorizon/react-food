import { type FC, memo } from 'react'

import type { Props } from './UserOptionItem.types'
import * as Item from './UserOptionItem.styled'

export const UserOptionItem: FC<Props> = memo(
  ({ title, href, action, universalClickAction }) => {
    const handleClick = () => {
      action && action()
      universalClickAction && universalClickAction()
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
