import styled from '@emotion/styled'

import { colors } from '@/styles/variables'

export const Price = styled.span`
  font-size: 24px;
  font-weight: 500;
`

export const DiscountLabel = styled.div`
  display: flex;
  align-items: flex-end;
`

export const DiscountPrice = styled.span`
  margin-right: 6px;
  font-size: 24px;
  font-weight: 500;
  color: ${colors.orange['1']};
`

export const ThroughFullPrice = styled.span`
  margin-bottom: 2px;
  font-size: 17px;
  text-decoration: line-through;
  color: ${colors.gray['8']};
`
