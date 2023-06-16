import styled from '@emotion/styled'

import { SectionRoot } from '../CartContent.styled'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled(SectionRoot)`
  margin-bottom: 24px;
`

export const TitleArticle = styled.article`
  margin-bottom: 14px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    text-align: center;
  }
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 1230px) {
    font-size: 21px;
  }

  @media screen and (max-width: 480px) {
    font-size: 19px;
  }
`

export const FormContainer = styled.div`
  margin-top: 16px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    margin-top: 8px;
  }
`
