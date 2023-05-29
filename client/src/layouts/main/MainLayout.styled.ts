import styled from '@emotion/styled'

import { colors } from '@styles/colors'
import { APP_HEADER_HEIGHT } from '@styles/constants'

export const Root = styled.div`
  width: 100%;
  background: ${colors.gray['2']};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: ${APP_HEADER_HEIGHT}px;
`
