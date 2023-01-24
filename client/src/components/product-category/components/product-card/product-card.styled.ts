import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@/styles/variables'

export const Root = styled.div<RootProps>`
  cursor: pointer;
  width: 224px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 24px;
  background: white;
  transition: background 100ms ease-in;

  img {
    object-fit: ${p => (p.imageLoadError ? 'contain' : 'cover')};
  }
`

export const Image = styled(NextImage)`
  border-radius: 18px;
  user-select: none;
  background: ${colors.gray['2']};
`

interface RootProps {
  imageLoadError: boolean
}
