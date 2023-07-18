import { type FC, memo } from 'react'

import type { OrderModel } from '@modules/Orders'
import { SectionTitle } from '../SelectedOrder.styled'
import * as Section from './SelectedOrderAddress.styled'

export const SelectedOrderAddress: FC<Props> = memo(({ deliveryAddress }) => (
  <Section.Root>
    <SectionTitle>Адрес</SectionTitle>
    <Section.Address>{deliveryAddress}</Section.Address>
  </Section.Root>
))

type Props = Pick<OrderModel, 'deliveryAddress'>
