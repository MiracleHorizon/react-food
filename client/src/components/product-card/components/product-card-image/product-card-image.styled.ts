import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@/styles/variables'
import {
  IProductCardVariant,
  ProductCardVariant
} from '@/components/product-card'

export const Root = styled.div<IProductCardVariant>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${p => p.variant === ProductCardVariant.SMALL && ' margin: -6px -6px 0'};

  div[data-el='discount-percent'] {
    position: absolute;
    right: ${p => (p.variant === ProductCardVariant.SMALL ? '8px' : '12px')};
    bottom: ${p => (p.variant === ProductCardVariant.SMALL ? '6px' : '8px')};
    rotate: 4deg;
  }
`

export const Image = styled(NextImage)`
  border-radius: 18px;
  user-select: none;
  background: ${colors.gray['2']};
`
