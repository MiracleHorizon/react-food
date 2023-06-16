import styled from '@emotion/styled'

export const listBorderRadius = 16

export const Root = styled.div`
  position: relative;
`

export const Options = styled.ul`
  position: absolute;
  width: 100%;
  max-width: 300px;
  margin-top: 8px;
  border-radius: ${listBorderRadius}px;
  background: white;
  z-index: 100;
  box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
`
