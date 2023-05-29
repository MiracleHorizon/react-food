import styled from '@emotion/styled'
import NextImage from 'next/image'
import NextLink from 'next/link'

export const Link = styled(NextLink)<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${p => (p.selected ? 1 : 0.4)};
  transition: opacity 70ms ease-in;

  &:hover {
    opacity: ${p => (p.selected ? 1 : 0.6)};
  }
`

export const Image = styled(NextImage)`
  margin-bottom: 2px;
`

export const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
`

interface Props {
  selected: boolean
}
