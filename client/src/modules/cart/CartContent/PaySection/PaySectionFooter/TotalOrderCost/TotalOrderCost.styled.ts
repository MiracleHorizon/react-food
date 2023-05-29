import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  text-align: right;
`

export const Value = styled.span`
  font-size: 24px;
  font-weight: 500;
`

export const ThroughValue = styled.span`
  margin-bottom: 4px;
  font-size: 16px;
  text-decoration: line-through;
  color: ${colors.gray['8']};
`
