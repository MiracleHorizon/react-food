import styled from '@emotion/styled'
import Link from 'next/link'

import { colors } from '@styles/colors'

export const Root = styled(Link)`
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-radius: 12px;
  transition: background 0.2s ease-out;

  &:hover {
    background: ${colors.gray['5']};
  }

  &:active {
    background: ${colors.gray['7']};
  }

  svg {
    width: 22px;
    height: 22px;
    margin-left: 4px;
  }
`

export const Title = styled.span`
  font-size: 18px;
`
