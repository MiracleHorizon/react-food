import styled from '@emotion/styled'

import BreadcrumbComponent from '@ui/Breadcrumb'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { truncateText } from '@styles/truncateText'

export const Root = styled.header`
  width: 100%;
  margin-bottom: 10px;

  @media screen and (${maxDeviceWidth.laptop}) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 505px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const Breadcrumb = styled(BreadcrumbComponent)`
  @media screen and (max-width: 505px) {
    display: none;
  }
`

export const TitleArticle = styled.article`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 14px;

  @media screen and (max-width: 505px) {
    margin-top: 0;
  }
`

export const Title = styled.h1`
  font-size: 44px;
  font-weight: 600;
  ${truncateText};

  @media screen and (${maxDeviceWidth.laptop}) {
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
