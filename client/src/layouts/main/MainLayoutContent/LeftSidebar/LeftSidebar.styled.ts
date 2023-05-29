import styled from '@emotion/styled'

import DeliveryInfoComponent from '@components/DeliveryInfo'

export const Root = styled.aside`
  min-width: 240px;
  width: 240px;
  margin-right: 32px;
  padding-left: 6px;
`

export const Title = styled.h4`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
`

export const DeliveryInfo = styled(DeliveryInfoComponent)`
  margin-bottom: 36px;
`
