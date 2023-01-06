import styled from '@emotion/styled'
import { darken } from 'polished'

import { colors } from '@/public/styles/variables'

export const Root = styled.button`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding-right: 16px;
  padding-left: 12px;
  margin: 0 6px;
  transition: background 20ms ease-out;
  background: ${colors.yellowPrimary};

  &:hover {
    background: ${darken(0.02, colors.yellowPrimary)};
  }
`

export const Paragraph = styled.p`
  margin-top: 2px;
  margin-left: 6px;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black1};
`

export const Currency = styled.span`
  margin-left: 2px;
`
