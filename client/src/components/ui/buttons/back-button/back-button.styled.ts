import styled from '@emotion/styled'

import { colors } from '@/styles/variables'

const StyledButton = styled.button`
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
    margin-right: 6px;
  }
`

export default StyledButton
