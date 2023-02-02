import styled from '@emotion/styled'

export const Root = styled.div`
  width: 100%;
  overflow: hidden;
`

export const List = styled.ul<ListProps>`
  width: 100%;
  display: flex;
  transform: translateX(${p => p.transform}%);
  transition: all 800ms;
`

interface ListProps {
  transform: number
}
