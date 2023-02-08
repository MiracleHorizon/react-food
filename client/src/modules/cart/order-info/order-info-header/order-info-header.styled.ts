import styled from '@emotion/styled'

import { colors } from '@styles/variables'

export const Root = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 26px;
`

export const Title = styled.h2`
  margin-bottom: 4px;
`

export const ProductsCount = styled.span`
  font-size: 17px;
  color: ${colors.gray['8']};
`
