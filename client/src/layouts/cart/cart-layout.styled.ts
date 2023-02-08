import styled from '@emotion/styled'

import { colors } from '@styles/variables'
import { appHeaderHeight } from '@components/app-header/app-header.styled'

export const Root = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  min-height: 100vh;
  width: 100vw;
  background: ${colors.gray['2']};
`

export const Content = styled.div`
  width: 100%;
`

export const Main = styled.main`
  padding: ${appHeaderHeight}px 150px 0 150px;
`
