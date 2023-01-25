import styled from '@emotion/styled'

import { colors } from '@/styles/variables'
import { IProductCardVariant, ProductCardVariant } from '../product-card-models'

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
  display: inline-block;
  margin-top: ${p => (p.variant === ProductCardVariant.SMALL ? '4px' : '7px')};
  font-size: 17px;
  line-height: 22px;
`

export const Price = styled.span`
  font-size: 24px;
  font-weight: 500;
`

export const Weight = styled.span`
  display: inline-block;
  font-size: 17px;
  color: ${colors.gray['8']};
`
