import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.main`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10vh;
`

export const Title = styled.h1`
  display: inline-block;
  max-width: 600px;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
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
