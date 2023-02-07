import styled from '@emotion/styled'
import { darken } from 'polished'

const itemBgColor = '#c9ae9f4a'

export const BubbleItem = styled.div`
  cursor: pointer;
  width: max-content;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${itemBgColor};
  font-size: 16px;
  transition: background 50ms ease-out;

  &:hover {
    background: ${darken(0.1, itemBgColor)};
  }

  &:active {
    background: ${darken(0.2, itemBgColor)};
  }
`
