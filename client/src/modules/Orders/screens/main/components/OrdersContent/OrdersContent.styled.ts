import dynamic from 'next/dynamic'
import styled from '@emotion/styled'

import { APP_HEADER_HEIGHT } from '@styles/constants'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

// TODO: Loader
const SelectedOrderComponent = dynamic(() => import('./SelectedOrder'), {
  ssr: false
})

export const Root = styled.div`
  width: 100%;
  min-height: calc(100vh - ${APP_HEADER_HEIGHT}px);
  padding: 0 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (${maxDeviceWidth.laptopLg}) {
    padding: 0;
  }

  @media screen and (${maxDeviceWidth.laptop}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

export const TitleArticle = styled.article`
  margin-bottom: 24px;

  @media screen and (${maxDeviceWidth.tablet}) {
    margin-bottom: 12px;
  }
`

export const Title = styled.h1`
  font-size: 46px;
  font-weight: 600;

  @media screen and (${maxDeviceWidth.tablet}) {
    font-size: 38px;
  }

  @media screen and (max-width: 600px) {
    font-size: 34px;
  }

  @media screen and (${maxDeviceWidth.mobileMd}) {
    font-size: 30px;
  }
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (${maxDeviceWidth.laptop}) {
    align-items: center;
    justify-content: flex-start;
    flex-direction: column-reverse;
  }

  @media screen and (${maxDeviceWidth.tablet}) {
    margin: 0;
  }
`

export const SelectedOrder = styled(SelectedOrderComponent)`
  margin-left: 100px;
`
