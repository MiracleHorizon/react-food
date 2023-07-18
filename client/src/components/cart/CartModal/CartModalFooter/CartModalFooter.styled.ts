import styled from '@emotion/styled'

import { OrderButton as OrderButtonComponent } from '@components/order/OrderButton'

const rootBoxShadow = 'box-shadow: 0px -4px 20px rgb(117 115 111 / 20%)'

export const Root = styled.footer<RootProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 24px 36px;
  transition: box-shadow 0.2s ease-in-out;
  ${p => !p.isScrollOnTop && !p.isScrollOnBottom && rootBoxShadow};
`

export const Cost = styled.strong`
  font-size: 26px;
  font-weight: 500;
`

export const OrderButton = styled(OrderButtonComponent)`
  width: 280px;
  justify-content: center;
`

interface RootProps {
  isScrollOnTop: boolean
  isScrollOnBottom: boolean
}
