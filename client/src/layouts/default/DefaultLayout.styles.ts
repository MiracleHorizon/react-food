import styled from '@emotion/styled'

const LAYOUT_PADDING = 45

export const Root = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  padding: ${LAYOUT_PADDING}px;
  background: #ffdf8c;
`

export const Content = styled.div`
  min-height: calc(100vh - ${LAYOUT_PADDING * 2}px);
  padding: 40px;
  border-radius: 22px;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.03);
  background: #f5f4f2;
`

export const Main = styled.main``
