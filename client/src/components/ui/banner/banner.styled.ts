import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Banner = styled.div<Props>`
  min-width: 48px;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-image: url(${p => p.bgImagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.gray['2']};
`

interface Props {
  bgImagePath: string
}
