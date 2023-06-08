import styled from '@emotion/styled'

import { APP_HEADER_HEIGHT, APP_HEADER_SMALL_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

export const Root = styled.div`
  min-width: 300px;
  width: 100%;
  background: ${colors.gray['2']};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: ${APP_HEADER_HEIGHT}px;

  @media screen and (${maxDeviceWidth.tablet}) {
    padding-top: ${APP_HEADER_SMALL_HEIGHT}px;
  }
`
