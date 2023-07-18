import { type FC, memo } from 'react'
import { Dialog } from '@headlessui/react'

import { ClearCartLabel } from '@components/cart/ClearCartLabel'
import * as Header from './CartModalHeader.styled'

export const CartModalHeader: FC<Props> = memo(props => (
  <Header.Root {...props}>
    <Dialog.Title as={Header.Title}>Мой заказ</Dialog.Title>
    <ClearCartLabel title='Очистить' />
  </Header.Root>
))

interface Props {
  isScrollOnTop: boolean
}
