import styled from '@emotion/styled'

import { MOBILE_MENU_HEIGHT } from '@styles/constants'

export const Root = styled.menu`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${MOBILE_MENU_HEIGHT}px;
  background: white;
  z-index: 10000;
  box-shadow: 0 8px 20px rgb(117 115 111 / 20%);
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
