import styled from '@emotion/styled'

const boxShadow = 'box-shadow: 0px -4px 20px rgb(117 115 111 / 20%)'

export const Root = styled.header<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 36px;
  transition: box-shadow 0.2s ease-in-out;
  ${p => !p.isScrollOnTop && boxShadow};

  button {
    opacity: 1;
  }
`

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 600;
`

interface Props {
  isScrollOnTop: boolean
}
