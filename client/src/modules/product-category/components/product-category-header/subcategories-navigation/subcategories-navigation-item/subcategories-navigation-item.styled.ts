import styled from '@emotion/styled'
import NextLink from 'next/link'

import { BubbleItem } from '@/public/styles/styled-components/bubble-item'

export const Root = styled(BubbleItem.withComponent('li'))`
  margin-bottom: 8px;

  &:not(&:last-of-type) {
    margin-right: 8px;
  }
`

export const Link = styled(NextLink)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`
