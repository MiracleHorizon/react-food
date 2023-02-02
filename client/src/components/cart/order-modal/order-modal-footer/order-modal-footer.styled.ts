import styled from '@emotion/styled'

export const Root = styled.footer<RootProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 24px 36px;
  transition: box-shadow 0.2s ease-in-out;
  ${p =>
    !p.isScrollOnTop &&
    !p.isScrollOnBottom &&
    'box-shadow: 0px -4px 20px rgb(117 115 111 / 20%)'};

  button {
    width: 280px;
    justify-content: center;
  }
`

export const Price = styled.span`
  font-weight: 500;
  font-size: 26px;
`

interface RootProps {
  isScrollOnTop: boolean
  isScrollOnBottom: boolean
}
