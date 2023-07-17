import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`

export const Content = styled.main`
  height: 100%;
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 18px;

  @media screen and (${maxDeviceWidth.mobileMd}) {
    padding: 0 12px;
  }
`
