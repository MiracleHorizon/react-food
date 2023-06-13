import styled from '@emotion/styled'

import { MOBILE_MENU_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  @media screen and (${maxDeviceWidth.tablet}) {
    padding-bottom: ${MOBILE_MENU_HEIGHT}px;
  }
`
