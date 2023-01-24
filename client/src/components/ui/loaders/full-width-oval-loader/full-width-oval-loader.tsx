import { Oval } from 'react-loader-spinner'
import type { FC } from 'react'

import { colors } from '@/styles/variables'
import StyledLoader from './full-width-oval-loader.styled'

const FullWidthOvalLoader: FC<Props> = ({ color }) => (
  <StyledLoader>
    <Oval
      width={55}
      strokeWidth={3}
      color={color || colors.yellow['1']}
      secondaryColor='transparent'
    />
  </StyledLoader>
)

export default FullWidthOvalLoader

interface Props {
  color?: string
}
