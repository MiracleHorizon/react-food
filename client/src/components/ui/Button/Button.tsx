import { type FC, memo } from 'react'

import type { Props } from './Button.types'
import * as Button from './Button.styled'

const ButtonComponent: FC<Props> = ({
  title,
  variant,
  leadIcon,
  className,
  onClick
}) => (
  <Button.Root className={className} variant={variant} onClick={onClick}>
    {leadIcon}
    <Button.Title withLeadIcon={Boolean(leadIcon)}>{title}</Button.Title>
  </Button.Root>
)

export default memo(ButtonComponent)
