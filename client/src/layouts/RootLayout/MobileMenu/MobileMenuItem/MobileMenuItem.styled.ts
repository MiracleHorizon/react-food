import styled from '@emotion/styled'
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

export const ImageContainer = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  margin-bottom: 2px;

  @media screen and (max-width: 550px) {
    width: 26px;
    height: 26px;
  }
`

export const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
`

interface Props {
  selected: boolean
}
