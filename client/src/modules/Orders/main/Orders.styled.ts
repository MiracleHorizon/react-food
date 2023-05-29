import styled from '@emotion/styled'

import MainLayout from '@layouts/Main'
import { APP_HEADER_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Layout = styled(MainLayout)`
  padding-bottom: 30px !important;

  @media (max-width: 1120px) {
    padding: 40px 0;
  }

  @media (${maxDeviceWidth.tablet}) {
    padding: 16px;
  }

  @media (max-width: 500px) {
    padding: 16px 6px;
  }
`

export const Root = styled.main`
  min-height: calc(100vh - ${APP_HEADER_HEIGHT}px);
  padding: 0 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media (${maxDeviceWidth.laptopLg}) {
    padding: 0;
  }

  @media (${maxDeviceWidth.laptop}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (${maxDeviceWidth.tablet}) {
    width: 100%;
  }
`

export const Title = styled.h1`
  align-self: flex-start;
  margin-bottom: 24px;
  font-size: 46px;
  font-weight: 600;

  @media (${maxDeviceWidth.laptop}) {
    align-self: center;
  }

  @media (${maxDeviceWidth.tablet}) {
    margin-bottom: 12px;
    font-size: 38px;
  }

  @media (${maxDeviceWidth.mobileLg}) {
    margin-bottom: 10px;
    font-size: 34px;
  }

  @media (${maxDeviceWidth.mobileMd}) {
    margin-bottom: 8px;
    font-size: 30px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;

  @media (${maxDeviceWidth.laptop}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
  }

  @media (${maxDeviceWidth.tablet}) {
    margin: 0;
  }
`
