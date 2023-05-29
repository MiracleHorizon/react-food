import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.section`
  margin-top: 30px;

  @media (max-width: 650px) {
    margin-top: 22px;
  }
`

export const Address = styled.span`
  display: inline-block;
  margin-top: 20px;
  font-size: 17px;

  @media (max-width: 650px) {
    margin-top: 14px;
    font-size: 15px;
  }

  @media (${maxDeviceWidth.mobileMd}) {
    margin-top: 12px;
    font-size: 13px;
  }
`
