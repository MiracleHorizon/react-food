import styled from '@emotion/styled'

import { BubbleItem } from '@/styles/styled-components/bubble-item'

export const Root = styled.nav`
  width: 100%;
`

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const ToggleExpandButton = styled(
  BubbleItem.withComponent('button')
)<ToggleExpandButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 1px 8px 0 16px;

  span {
    margin-right: 2px;
  }

  svg {
    height: 24px;
    rotate: ${p => (p.expanded ? -90 : 90)}deg;
  }
`

interface ToggleExpandButtonProps {
  expanded: boolean
}
