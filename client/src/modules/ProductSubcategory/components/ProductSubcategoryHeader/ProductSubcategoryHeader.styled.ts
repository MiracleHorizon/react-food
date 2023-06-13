import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.header`
  margin-bottom: 18px;

  @media screen and (${maxDeviceWidth.tablet}) {
    margin-bottom: 11px;
  }

  @media screen and (max-width: 517px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  margin-top: 8px;
  font-size: 44px;
  font-weight: 600;

  @media screen and (max-width: 1025px) {
    font-size: 38px;
  }

  @media screen and (${maxDeviceWidth.tablet}) {
    font-size: 34px;
  }

  @media screen and (max-width: 517px) {
    font-size: 30px;
  }
`
