import styled from '@emotion/styled'

import { APP_HEADER_HEIGHT } from '@/components/app-header/AppHeader.styles'
import {
  DEFAULT_LAYOUT_ASIDE_PANEL_X_MARGIN,
  DEFAULT_LAYOUT_CONTENT_TOP_PADDING
} from '../DefaultLayoutContent.styles'

const BORDER_RADIUS = 24
const TOP_OFFSET = APP_HEADER_HEIGHT + DEFAULT_LAYOUT_CONTENT_TOP_PADDING

export const Root = styled.aside`
  position: sticky;
  top: ${TOP_OFFSET}px;
  width: 320px;
  height: calc(100vh - ${TOP_OFFSET}px);
  margin-left: ${DEFAULT_LAYOUT_ASIDE_PANEL_X_MARGIN}px;
  border-top-left-radius: ${BORDER_RADIUS}px;
  border-top-right-radius: ${BORDER_RADIUS}px;
  background: white;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`
