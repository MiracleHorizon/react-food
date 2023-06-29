import styled from '@emotion/styled'

import { colors } from '@styles/colors'

const Divider = styled.div`
  background: ${colors.gray['6']};
`

export const HorizontalDivider = styled(Divider)`
  width: 100%;
  height: 1px;
`
