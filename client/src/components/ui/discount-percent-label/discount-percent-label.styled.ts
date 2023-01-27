import styled from '@emotion/styled'

import { colors } from '@/styles/variables'

export const Root = styled.div`
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border-radius: 6px;
  background: ${colors.orange['1']};
`

export const Text = styled.span`
  display: block;
  font-size: 13px;
  color: white;
`
