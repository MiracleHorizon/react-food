import styled from '@emotion/styled'

import {
  type IShowcaseProductCardVariant,
  ShowcaseProductCardVariant
} from '@components/ShowcaseProductCard'
import { colors } from '@styles/colors'

export const Root = styled.main<IShowcaseProductCardVariant>`
  flex: 1 1 auto;
  margin-top: ${p =>
    p.variant === ShowcaseProductCardVariant.SMALL ? 12 : 20}px;
  margin-bottom: ${p =>
    p.variant === ShowcaseProductCardVariant.SMALL ? 10 : 12}px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`

export const Title = styled.span<IShowcaseProductCardVariant>`
  height: 40px;
  width: 100%;
  display: -webkit-box;
  margin-top: ${p =>
    p.variant === ShowcaseProductCardVariant.SMALL ? 4 : 7}px;
  font-size: 17px;
  line-height: 22px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-word;
  overflow: hidden;
`

export const Weight = styled.span`
  font-size: 17px;
  color: ${colors.gray['8']};
`
