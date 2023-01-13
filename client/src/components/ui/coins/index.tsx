import type { FC } from 'react'

import ReactSvg from '@/ui/svg/ReactSvg'
import Container from './Coins.styles'

const Coins: FC<Props> = ({ count }) => (
  <Container>
    <ReactSvg />
    <span>{count}</span>
  </Container>
)

export default Coins

interface Props {
  count: number
}
