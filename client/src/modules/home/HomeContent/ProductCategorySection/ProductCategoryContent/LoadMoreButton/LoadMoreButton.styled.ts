import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.div`
  cursor: pointer;
  min-width: 172px;
  width: 172px;
  height: 337px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-left: 4px;
  background: white;
  transition: background 0.2s ease-out;

  &:hover {
    background: ${colors.gray['5']};
  }

  &:active {
    background: ${colors.gray['7']};
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }
`

export const Title = styled.span`
  font-size: 16px;
`
