import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { truncateText } from '@styles/truncateText'

export const Root = styled.header`
  margin-bottom: 18px;

  @media screen and (${maxDeviceWidth.tablet}) {
    margin-bottom: 11px;
  }

  @media screen and (max-width: 505px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const TitleArticle = styled.article`
  width: 100%;
  margin-top: 8px;
`

export const Title = styled.h1`
  font-size: 44px;
  font-weight: 600;
  ${truncateText};

  @media screen and (max-width: 1025px) {
    font-size: 38px;
  }

  @media screen and (${maxDeviceWidth.tablet}) {
    font-size: 34px;
  }

  @media screen and (max-width: 505px) {
    font-size: 30px;
    text-align: center;
  }
`
