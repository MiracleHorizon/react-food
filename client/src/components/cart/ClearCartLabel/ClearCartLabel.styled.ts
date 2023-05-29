import styled from '@emotion/styled'
import NextImage from 'next/image'

export const Root = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.4;
  font-size: 17px;
  transition: opacity 150ms ease-out;

  &:hover {
    opacity: 1;
  }
`

export const Image = styled(NextImage)`
  margin-right: 4px;
`
