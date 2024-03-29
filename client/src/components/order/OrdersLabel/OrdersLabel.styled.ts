import styled from '@emotion/styled'
import Link from 'next/link'

import { colors } from '@styles/colors'

export const Root = styled(Link)`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 6px;
  padding: 0 18px;
  border-radius: 12px;
  transition: background 80ms ease-out;

  &:hover {
    background: ${colors.gray['4']};
  }

  &:active {
    background: ${colors.gray['6']};
  }
`

export const IconContainer = styled.span`
  display: block;
  height: 24px;
  margin-bottom: 2px;
`

export const Title = styled.span`
  font-size: 14px;
`
