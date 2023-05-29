import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.main`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
`

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  text-align: center;

  @media (${maxDeviceWidth.laptop}) {
    font-size: 24px;
  }

  @media (${maxDeviceWidth.mobileLg}) {
    font-size: 18px;
  }
`

export const Svg = styled.svg`
  max-width: 400px;

  @media (${maxDeviceWidth.mobileLg}) {
    max-width: 250px;
  }
`
