import styled from '@emotion/styled'
import NextImage from 'next/image'

import DiscountPercentLabelComponent from '@components/DiscountPercentLabel'
import {
  type IShowcaseProductCardVariant,
  ShowcaseProductCardVariant
} from '@components/ShowcaseProductCard'

export const Root = styled.div<IShowcaseProductCardVariant>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${p =>
    p.variant === ShowcaseProductCardVariant.SMALL ? '-6px -6px 0' : '0'};
`

export const DiscountPercentLabel = styled(
  DiscountPercentLabelComponent
)<IShowcaseProductCardVariant>`
  position: absolute;
  right: ${p => (p.variant === ShowcaseProductCardVariant.SMALL ? 8 : 12)}px;
  bottom: ${p => (p.variant === ShowcaseProductCardVariant.SMALL ? 6 : 8)}px;
  rotate: 4deg;
`

export const Image = styled(NextImage)`
  border-radius: 18px;
  object-fit: contain;
  user-select: none;
`
