import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@styles/variables'

export const Root = styled.button`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  font-size: 17px;
  color: ${colors.black['1']};
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }
`

export const Image = styled(NextImage)`
  margin-right: 4px;
`
