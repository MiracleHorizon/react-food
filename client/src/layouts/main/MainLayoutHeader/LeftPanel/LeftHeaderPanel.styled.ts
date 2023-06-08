import styled from '@emotion/styled'

import AppLogo from '@components/AppLogo'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled(AppLogo)`
  @media screen and (${maxDeviceWidth.tablet}) {
    display: none;
  }
`
