import { type FC, memo } from 'react'

import type { Props } from './Button.types'
import * as Button from './Button.styled'

const ButtonComponent: FC<Props> = memo(({ title, leadIcon, ...props }) => (
  <Button.Root {...props}>
    {leadIcon}
    {title && (
      <Button.Title withLeadIcon={Boolean(leadIcon)}>{title}</Button.Title>
    )}
  </Button.Root>
))

export { ButtonComponent as Button }
