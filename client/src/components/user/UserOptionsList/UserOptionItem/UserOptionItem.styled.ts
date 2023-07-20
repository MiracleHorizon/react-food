import styled from '@emotion/styled'
import NextLink from 'next/link'

import { colors } from '@styles/colors'

export const Root = styled.li`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 16px;
  background: transparent;
  transition: background 0.1s ease-out;

  &:not(&:last-of-type) {
    margin-bottom: 14px;
  }

  &:hover {
    background: ${colors.gray['4']};
  }

  &:active {
    background: ${colors.gray['6']};
  }
`

export const Caption = styled.span`
  width: 100%;
  font-size: 17px;
  line-height: 24px;
`

export const Link = Caption.withComponent(NextLink)
