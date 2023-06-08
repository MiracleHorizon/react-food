import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;

  @media screen and (max-width: 1000px) {
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  min-width: 600px;
  width: 600px;
  margin-right: 90px;

  @media screen and (max-width: 1230px) {
    width: 520px;
    min-width: 520px;
    margin-right: 34px;
  }

  @media screen and (max-width: 1000px) {
    width: 650px;
    min-width: 650px;
    margin-right: 0;
    margin-bottom: 24px;
  }

  @media screen and (${maxDeviceWidth.tablet}) {
    width: 100%;
    min-width: initial;
  }
`

export const RightSide = styled.div`
  position: sticky;
  top: 120px;
  min-width: 450px;
  width: 450px;
  height: calc(100vh - 120px);

  @media screen and (max-width: 1230px) {
    width: 400px;
    min-width: 400px;
  }

  @media screen and (max-width: 1000px) {
    width: 650px;
    min-width: 650px;
  }

  @media screen and (${maxDeviceWidth.tablet}) {
    width: 100%;
    min-width: initial;
  }
`

export const SectionRoot = styled.section`
  width: 100%;
  padding: 32px;
  border-radius: 32px;
  background: white;

  @media screen and (max-width: 480px) {
    padding: 20px 16px 16px;
  }

  @media screen and (max-width: 390px) {
    padding: 20px 12px 12px;
  }
`
