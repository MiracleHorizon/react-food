import styled from '@emotion/styled'

import { colors } from '@styles/variables'

export const Root = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.gray['2']};
  color: ${colors.black['1']};
`
