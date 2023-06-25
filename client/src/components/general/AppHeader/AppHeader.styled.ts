import styled from '@emotion/styled'

import { APP_HEADER_HEIGHT, APP_HEADER_SMALL_HEIGHT } from '@styles/constants'
import { TopFixedElement } from '@styles/styled-components/TopFixedElement'
import { HorizontalDivider } from '@styles/styled-components/Divider'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { colors } from '@styles/colors'

const rootBoxShadow = 'box-shadow: 0 8px 20px rgb(117 115 111 / 20%)'

export const Root = styled(TopFixedElement.withComponent('header'))<RootProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${APP_HEADER_HEIGHT}px;
  padding: 0 24px;
  background: ${colors.gray['2']};
  transition: box-shadow 0.2s ease-in-out;
  ${p => !p.isPageScrollOnTop && rootBoxShadow};

  @media screen and (${maxDeviceWidth.tablet}) {
    height: ${APP_HEADER_SMALL_HEIGHT}px;
  }

  @media screen and (max-width: 500px) {
    padding: 0 12px;
  }

  @media screen and (${maxDeviceWidth.mobileMd}) {
    padding: 0 8px;
  }
`

export const Content = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Divider = styled(HorizontalDivider)`
  background: #8a878466;
`

interface RootProps {
  isPageScrollOnTop: boolean
}
