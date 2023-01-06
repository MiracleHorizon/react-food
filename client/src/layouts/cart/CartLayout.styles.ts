import styled from '@emotion/styled'

import { colors } from '@/public/styles/variables'

export const CART_LAYOUT_HEADER_HEIGHT = 80

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
  padding: ${CART_LAYOUT_HEADER_HEIGHT}px 150px 0 150px;
`
