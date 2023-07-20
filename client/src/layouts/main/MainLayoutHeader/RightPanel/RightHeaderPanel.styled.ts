import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (${maxDeviceWidth.tablet}) {
    display: none;
  }
`
