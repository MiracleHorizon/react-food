import styled from '@emotion/styled'
import NextImage from 'next/image'

import { colors } from '@/styles/variables'

export const Root = styled.button`
  height: 50px;
  padding: 13px 18px;
  border-radius: 16px;
  background: ${colors.gray['3']};
  transition: background 0.2s ease-out;

  &:hover {
    background: ${colors.gray['5']};
  }

  &:active {
    background: ${colors.gray['7']};
  }
`

export const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 17px;
  color: ${colors.black['1']};
`

export const Image = styled(NextImage)`
  margin-right: 10px;
`
