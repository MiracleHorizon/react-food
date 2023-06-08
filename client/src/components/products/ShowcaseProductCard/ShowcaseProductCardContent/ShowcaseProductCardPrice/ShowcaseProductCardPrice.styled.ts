import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const TotalPrice = styled.span`
  font-size: 24px;
  font-weight: 500;
`

export const DiscountLabel = styled.div`
  display: flex;
  align-items: flex-end;
`

export const DiscountPrice = styled(TotalPrice)`
  margin-right: 6px;
  color: ${colors.orange.primary};
`

export const ThroughFullPrice = styled.span`
  margin-bottom: 2px;
  font-size: 18px;
  text-decoration: line-through;
  color: ${colors.gray['8']};
`
