import styled from '@emotion/styled'
import { darken } from 'polished'

import { colors } from '@styles/colors'

export const Root = styled.button`
  cursor: pointer;
  min-width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 12px;
  border-radius: 16px;
  background: ${colors.yellow.primary};

  &:hover {
    background: ${darken(0.02, colors.yellow.primary)};
  }
`

export const Cost = styled.span`
  display: inline-block;
  margin-top: 2px;
  margin-left: 6px;
  font-size: 16px;
  font-weight: 500;
`
