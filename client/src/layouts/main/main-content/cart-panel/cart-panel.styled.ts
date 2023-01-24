import styled from '@emotion/styled'

import { appHeaderHeight } from '@/components/app-header/app-header.styled'
import { asideMarginX, contentTopPadding } from '../main-content.styled'

const borderRadius = 24
const topOffset = appHeaderHeight + contentTopPadding

export const Root = styled.aside`
  position: sticky;
  top: ${topOffset}px;
  width: 320px;
  height: calc(100vh - ${topOffset}px);
  margin-left: ${asideMarginX}px;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background: white;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
`
