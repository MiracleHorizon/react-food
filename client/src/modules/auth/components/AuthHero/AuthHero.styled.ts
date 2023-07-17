import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  width: 100%;
  margin-bottom: 22px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 26px;
  }

  @media screen and (${maxDeviceWidth.mobileLg}) {
    font-size: 24px;
  }
`
