import styled from '@emotion/styled'

import { APP_HEADER_SMALL_HEIGHT, MOBILE_MENU_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

// NOTE: Компонент используется только для небольших экранов (<= tablet)
export const Root = styled.div`
  position: fixed;
  left: 0;
  top: ${APP_HEADER_SMALL_HEIGHT}px;
  width: 100vw;
  height: calc(100vh - ${APP_HEADER_SMALL_HEIGHT - MOBILE_MENU_HEIGHT}px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: ${colors.gray['2']};
`

export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 6px 12px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    padding: 4px;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  margin: 14px 0;
  background: ${colors.gray['7']};
`
