import styled from '@emotion/styled'

export const DEFAULT_LAYOUT_ASIDE_PANEL_X_MARGIN = 32
export const DEFAULT_LAYOUT_CONTENT_TOP_PADDING = 40

export const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: ${DEFAULT_LAYOUT_CONTENT_TOP_PADDING}px 60px 0 60px;
  transition: filter 0.2s ease-in;
`
