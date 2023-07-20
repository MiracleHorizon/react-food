import styled from '@emotion/styled'

import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Panel = styled.div`
  width: 600px;
  padding: 30px 32px;
  border-radius: 24px;
  margin: 0 12px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
  background: white;

  @media screen and (max-width: 500px) {
    max-height: calc(100% - 24px);
    padding: 20px;
    overflow: auto;
  }
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;

  @media screen and (max-width: 500px) {
    margin-bottom: 0;
  }
`

export const TitleArticle = styled.article`
  width: 100%;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    text-align: center;
  }
`

export const Title = styled.h3`
  font-size: 26px;
  font-weight: 600;
`
