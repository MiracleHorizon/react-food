import styled from '@emotion/styled'

import { colors } from '@styles/variables'

const StyledBanner = styled.div<BannerProps>`
  min-width: 48px;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-image: url(${p => p.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.gray['2']};
`

export default StyledBanner

interface BannerProps {
  backgroundImage: string
}
