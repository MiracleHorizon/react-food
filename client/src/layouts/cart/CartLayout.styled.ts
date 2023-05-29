import styled from '@emotion/styled'

import { APP_HEADER_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

export const Root = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: ${colors.gray['2']};
`

export const Main = styled.main`
  width: 100%;
  padding-top: ${APP_HEADER_HEIGHT}px;

  @media (${maxDeviceWidth.tablet}) {
    padding: ${APP_HEADER_HEIGHT}px 16px 16px;
  }
`
