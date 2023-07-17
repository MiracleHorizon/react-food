import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Input = styled.input`
  width: 100%;
  padding: 0 10px;
  border-radius: 8px;
  border: 1.5px solid ${colors.gray['7']};
  font-size: 18px;
  transition: border 80ms ease-in;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    border: 1.5px solid rgba(0, 0, 0, 0.4);
  }
`
