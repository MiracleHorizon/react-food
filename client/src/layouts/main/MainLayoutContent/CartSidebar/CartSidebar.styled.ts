import styled from '@emotion/styled'

import { APP_HEADER_HEIGHT } from '@styles/constants'

const borderRadius = 24
const contentTopPadding = 40
const topOffset = APP_HEADER_HEIGHT + contentTopPadding

export const Root = styled.aside`
  position: sticky;
  top: ${topOffset}px;
  min-width: 320px;
  width: 320px;
  height: calc(100vh - ${topOffset}px);
  margin-left: 32px;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background: white;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
