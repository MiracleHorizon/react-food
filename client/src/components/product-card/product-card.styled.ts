import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@/styles/variables'
import { IProductCardVariant, ProductCardVariant } from './product-card-models'

export const Root = styled.div<RootProps>`
  cursor: pointer;
  width: ${p => (p.variant === ProductCardVariant.SMALL ? '172px' : '224px')};
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 24px;
  background: white;
  transition: background 100ms ease-in;

  img {
    object-fit: ${p => (p.imageLoadError ? 'contain' : 'cover')};
    ${p => p.variant === ProductCardVariant.SMALL && 'margin: -6px -6px 0'};
  }
`

export const Image = styled(NextImage)`
  border-radius: 18px;
  user-select: none;
  background: ${colors.gray['2']};
`

interface RootProps extends IProductCardVariant {
  imageLoadError: boolean
}
