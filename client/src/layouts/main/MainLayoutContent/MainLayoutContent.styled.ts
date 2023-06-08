import styled from '@emotion/styled'

import LeftSidebarComponent from './LeftSidebar'
import CartSidebarComponent from './CartSidebar'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 55px 0 55px;

  @media screen and (${maxDeviceWidth.laptopLg}) {
    padding: 40px 40px 0 40px;
  }

  @media screen and (${maxDeviceWidth.laptop}) {
    padding: 40px 30px 0 30px;
  }

  @media screen and (max-width: 1240px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 1025px) {
    padding-top: 30px;
  }

  @media screen and (max-width: 517px) {
    padding-top: 20px;
  }
`

export const LeftSidebar = styled(LeftSidebarComponent)`
  @media screen and (${maxDeviceWidth.laptop}) {
    display: none;
  }
`

export const CartSidebar = styled(CartSidebarComponent)`
  @media screen and (max-width: 1240px) {
    display: none;
  }
`
