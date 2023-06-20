import { type FC, memo } from 'react'

import type { OrderModel } from '@modules/Orders'
import { SectionTitle } from '../SelectedOrder.styled'
import * as Section from './SelectedOrderAddress.styled'

const SelectedOrderAddress: FC<Props> = ({ deliveryAddress }) => (
  <Section.Root>
    <SectionTitle>Адрес</SectionTitle>
    <Section.Address>{deliveryAddress}</Section.Address>
  </Section.Root>
)

export default memo(SelectedOrderAddress)

type Props = Pick<OrderModel, 'deliveryAddress'>
