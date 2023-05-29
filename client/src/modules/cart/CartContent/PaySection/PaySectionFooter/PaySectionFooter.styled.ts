import styled from '@emotion/styled'

import OrderButton from '@components/order/OrderButton'

export const Root = styled.footer`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`

export const PayButton = styled(OrderButton)`
  max-width: 280px;
  justify-content: center;

  span {
    margin: 0;
  }
`
