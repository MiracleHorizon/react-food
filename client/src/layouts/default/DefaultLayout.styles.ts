import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'
import { APP_HEADER_HEIGHT } from '@/components/app-header/AppHeader.styles'

export const Root = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  min-width: 100vw;
  background: ${colors.gray4};
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 200vh;
  padding-top: ${APP_HEADER_HEIGHT}px;
`
