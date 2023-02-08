import styled from '@emotion/styled'
import { darken } from 'polished'

import { colors } from '@styles/variables'

export const Root = styled.button`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 12px;
  border-radius: 16px;
  transition: background 20ms ease-out;
  background: ${colors.yellow['1']};

  &:hover {
    background: ${darken(0.02, colors.yellow['1'])};
  }
`

export const Cost = styled.span`
  margin-left: 6px;
  margin-top: 2px;
  font-size: 16px;
  font-weight: 500;
`
