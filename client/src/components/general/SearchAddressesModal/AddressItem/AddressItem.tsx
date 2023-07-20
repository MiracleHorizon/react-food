import type { FC } from 'react'

import type { AddressLocation } from '@models/user/AddressLocation'
import * as Item from './AddressItem.styled'

export const AddressItem: FC<Props> = ({
  address,
  handleSelectAddressLocation,
  onCloseModal
}) => {
  const { street, house, city } = address

  const handleClick = () => {
    handleSelectAddressLocation(address)
    onCloseModal()
  }

  return (
    <Item.Root onClick={handleClick}>
      <Item.Address>
        улица {street}, {house}
      </Item.Address>
      <Item.City>{city}</Item.City>
    </Item.Root>
  )
}

interface Props {
  address: AddressLocation
  onCloseModal: VoidFunction
  handleSelectAddressLocation: (addressLocation: AddressLocation) => void
}
