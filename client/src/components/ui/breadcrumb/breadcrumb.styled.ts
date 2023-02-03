import styled from '@emotion/styled'
import Link from 'next/link'

export const Root = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled(Link)<ItemProps>`
  font-size: 17px;
  opacity: ${p => (p.selected ? 1 : 0.5)};
  transition: opacity 200ms ease;

  &:hover {
    opacity: 1;
  }
`

export const Separator = styled.div`
  margin: 0 14px;
  opacity: 0.5;
`

interface ItemProps {
  selected: boolean
}
