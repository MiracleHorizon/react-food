import Link from 'next/link'
import styled from '@emotion/styled'

import { colors } from '@/styles/variables'

export const Root = styled(Link)`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 18px;
  margin: 0 6px;
  border-radius: 12px;
  transition: background 50ms ease-out;

  &:hover {
    background: ${colors.gray['4']};
  }

  &:active {
    background: ${colors.gray['6']};
  }
`

export const SvgWrapper = styled.span`
  display: block;
  height: 24px;
  margin-bottom: 2px;
`

export const Text = styled.span`
  font-size: 14px;
`