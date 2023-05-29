import styled from '@emotion/styled'
import { darken } from 'polished'

const color = '#eeeeee'

export const Root = styled.button`
  padding: 13px 18px;
  border-radius: 16px;
  background: ${color};
  transition: background 0.2s ease-out;

  @media screen and (max-width: 1230px) {
    padding: 10px 14px;
  }

  @media screen and (max-width: 480px) {
    padding: 8px 10px;
    border-radius: 10px;
  }

  &:hover {
    background: ${darken(0.06, color)};
  }

  &:active {
    background: ${darken(0.1, color)};
  }
`

export const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 500;

  @media screen and (max-width: 1230px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  min-width: 24px;
  margin-right: 10px;
  z-index: 0;

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    min-width: 20px;
    margin-right: 8px;
  }
`
