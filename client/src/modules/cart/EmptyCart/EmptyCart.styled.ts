import styled from '@emotion/styled'

import { Button as ButtonComponent } from '@ui/Button'
import { APP_HEADER_HEIGHT } from '@styles/constants'

export const Root = styled.div`
  width: 100%;
  height: calc(100vh - ${APP_HEADER_HEIGHT}px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 420px;
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 450px) {
    width: 100%;
    max-width: 100%;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 162px;
  height: 146px;
  opacity: 0.3;

  @media screen and (max-width: 450px) {
    width: 120px;
    height: 104px;
  }
`

export const Title = styled.h1`
  display: inline-block;
  max-width: 240px;
  margin: 24px 0;
  font-size: 30px;
  font-weight: 600;
  line-height: 30px;

  @media screen and (max-width: 450px) {
    margin: 16px 0;
    font-size: 26px;
  }
`

export const Description = styled.p`
  margin-bottom: 34px;
  font-size: 18px;
  line-height: 21px;

  @media screen and (max-width: 450px) {
    margin-bottom: 20px;
    font-size: 16px;
  }
`

export const Button = styled(ButtonComponent)`
  width: 300px;

  @media screen and (max-width: 450px) {
    width: 80%;
  }
`
