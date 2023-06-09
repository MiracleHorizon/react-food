import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  display: none;

  @media screen and (${maxDeviceWidth.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 16px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
