import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@styles/variables'

export const Root = styled.div`
  width: 28px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: ${colors.green['1']};
`

export const Image = styled(NextImage)`
  filter: invert(1);
  object-fit: cover;
`
