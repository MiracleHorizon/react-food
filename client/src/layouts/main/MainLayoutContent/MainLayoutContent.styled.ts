import styled from '@emotion/styled'

import CartSidebarComponent from './CartSidebar'

export const Root = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 55px 0 55px;

  @media screen and (max-width: 1680px) {
    padding: 40px 35px 0 35px;
  }

  @media screen and (max-width: 1240px) {
    justify-content: flex-start;
    padding: 40px 24px 0 24px;
  }

  @media screen and (max-width: 1025px) {
    padding-top: 30px;
  }

  @media screen and (max-width: 517px) {
    padding-top: 20px;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 20px;
`

export const CartSidebar = styled(CartSidebarComponent)`
  @media screen and (max-width: 1240px) {
    display: none;
  }
`
