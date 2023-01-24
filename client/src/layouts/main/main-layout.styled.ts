import styled from '@emotion/styled'

import { colors } from '@/styles/variables'
import { appHeaderHeight } from '@/components/app-header/app-header.styled'

export const Root = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  min-width: 100vw;
  background: ${colors.gray['2']};
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: ${appHeaderHeight}px;
`
