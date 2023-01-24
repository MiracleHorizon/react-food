import styled from '@emotion/styled'

// TODO minmax autorepeat.
export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 14px 8px;
  padding-bottom: 14px;
`
