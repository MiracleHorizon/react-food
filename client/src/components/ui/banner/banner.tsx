import type { FC } from 'react'

import StyledBanner from './banner.styled'

const Banner: FC<Props> = ({ backgroundImage }) => (
  <StyledBanner backgroundImage={backgroundImage} />
)

export default Banner

interface Props {
  backgroundImage: string
}
