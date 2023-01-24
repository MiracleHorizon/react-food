import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@/styles/variables'

export const imageSize = 70

export const Root = styled.li<RootProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    left: ${p => (p.lastInOrder ? '0px' : `calc(${imageSize}px + 8px)`)};
    bottom: ${p => (p.lastInOrder ? '-4px' : '0px')};
    height: 0.5px;
    background: #8a878466;
  }
`

export const Image = styled(NextImage)`
  margin-right: 10px;
  border-radius: 18px;
  background: ${colors.gray['2']};
  object-fit: cover;
`

interface RootProps {
  lastInOrder: boolean
}
