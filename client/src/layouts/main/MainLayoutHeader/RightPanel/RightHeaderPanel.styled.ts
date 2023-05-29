import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Panel = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (${maxDeviceWidth.tablet}) {
    display: none;
  }
`
