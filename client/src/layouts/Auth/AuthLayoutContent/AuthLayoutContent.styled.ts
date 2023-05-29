import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.main`
  display: flex;

  @media screen and (${maxDeviceWidth.tablet}) {
    flex-direction: column;
  }
`

export const CoverSection = styled.section`
  width: 40vw;
  background: cornflowerblue;

  @media screen and (${maxDeviceWidth.tablet}) {
    display: none;
  }
`

export const FormSection = styled.section`
  min-width: 450px;
  width: 40vw;
  padding: 0 30px;

  @media screen and (max-width: 680px) {
    width: 100vw;
  }

  @media screen and (${maxDeviceWidth.mobileLg}) {
    padding: 0 10px;
  }
`
