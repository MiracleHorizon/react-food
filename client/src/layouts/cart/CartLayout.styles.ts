import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'
import { APP_HEADER_HEIGHT } from '@/components/app-header/AppHeader.styles'

export const Root = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  min-height: 100vh;
  width: 100vw;
  background: ${colors.gray4};
`

export const Content = styled.div`
  width: 100%;
`

export const Main = styled.main`
  padding: ${APP_HEADER_HEIGHT}px 150px 0 150px;
`
