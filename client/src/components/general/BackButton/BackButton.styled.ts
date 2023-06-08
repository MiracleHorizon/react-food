import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.gray['8']};
  stroke: ${colors.gray['8']};
  opacity: 0.7;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 24px;
    height: 24px;
    transform: rotate(180deg);
    margin-right: 2px;
  }
`
