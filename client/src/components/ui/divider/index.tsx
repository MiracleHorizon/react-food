import type { FC } from 'react'

import { HorizontalDivider, VerticalDivider } from './Divider.styles'

const Divider: FC<Props> = ({ direction }) =>
  direction === 'vertical' ? <VerticalDivider /> : <HorizontalDivider />

export default Divider

interface Props {
  direction: 'vertical' | 'horizontal'
}
