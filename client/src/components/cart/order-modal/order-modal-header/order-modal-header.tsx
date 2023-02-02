import { Dialog } from '@headlessui/react'
import type { FC } from 'react'

// import ClearCartButton from '@/components/clear-cart-button'
import StyledHeader from './order-modal-header.styled'

const OrderModalHeader: FC<Props> = props => (
  <StyledHeader {...props}>
    <Dialog.Title as='h3'>Мой заказ</Dialog.Title>
    {/*<ClearCartButton title='Очистить' />*/}
  </StyledHeader>
)

export default OrderModalHeader

interface Props {
  isScrollOnTop: boolean
}
