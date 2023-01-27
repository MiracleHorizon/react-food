import styled from '@emotion/styled'

export const asideMarginX = 32
export const contentTopPadding = 40

const StyledContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${contentTopPadding}px 55px 0 55px;
  transition: filter 0.2s ease-in;
`

export default StyledContent
