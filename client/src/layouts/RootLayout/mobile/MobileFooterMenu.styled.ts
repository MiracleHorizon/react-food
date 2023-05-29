import styled from '@emotion/styled'

export const Root = styled.menu`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  background: white;
  display: none;
  box-shadow: 0 8px 20px rgb(117 115 111 / 20%);

  @media screen and (max-width: 760px) {
    display: initial;
  }
`

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
`

export const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
