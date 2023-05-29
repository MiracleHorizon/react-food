import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border-radius: 6px;
  background: ${colors.orange.primary};
`

export const Percent = styled.span`
  display: block;
  font-size: 13px;
  color: white;
`
