import styled from '@emotion/styled'

import { colors } from '@/styles/variables'
import {
  IProductCardVariant,
  ProductCardVariant
} from '@/components/product-card'

export const Root = styled.main<IProductCardVariant>`
  flex: 1 1 auto;
  margin-top: ${p =>
    p.variant === ProductCardVariant.SMALL ? '12px' : '20px'};
  margin-bottom: ${p =>
    p.variant === ProductCardVariant.SMALL ? '10px' : '12px'};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`

export const Title = styled.span<IProductCardVariant>`
  height: 40px;
  width: 100%;
  display: -webkit-box;
  margin-top: ${p => (p.variant === ProductCardVariant.SMALL ? '4px' : '7px')};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-word;
  overflow: hidden;
  font-size: 17px;
  line-height: 22px;
`

export const Weight = styled.span`
  display: inline-block;
  font-size: 17px;
  color: ${colors.gray['8']};
`
