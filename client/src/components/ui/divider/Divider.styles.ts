import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

export const Divider = styled.div`
  background: ${colors.gray5};
`

export const HorizontalDivider = styled(Divider)`
  width: 100%;
  height: 1px;
`

export const VerticalDivider = styled(Divider)`
  width: 1px;
  height: 100%;
`
