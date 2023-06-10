import styled from '@emotion/styled'

import { APP_HEADER_SMALL_HEIGHT, MOBILE_MENU_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

export const Root = styled.menu`
  position: fixed;
  left: 0;
  top: ${APP_HEADER_SMALL_HEIGHT + 1}px;
  width: 100vw;
  height: calc(
    100vh - ${MOBILE_MENU_HEIGHT}px - ${APP_HEADER_SMALL_HEIGHT + 1}px
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background: ${colors.gray['2']};
`

export const Content = styled.main`
  width: 100%;
  height: 100%;
  padding: 6px 12px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    padding: 4px;
  }
`
