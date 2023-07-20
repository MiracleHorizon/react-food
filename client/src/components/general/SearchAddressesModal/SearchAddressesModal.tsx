import type { FC } from 'react'

import { AddressItem } from './AddressItem'
import type { AddressLocation } from '@models/user/AddressLocation'
import * as Modal from './SearchAddressesModal.styled'

export const SearchAddressesModal: FC<Props> = ({
  addresses,
  handleSelectAddressLocation,
  onClose
}) => (
  <Modal.Root>
    {addresses.map(address => (
      <AddressItem
        key={address.id}
        address={address}
        onCloseModal={onClose}
        handleSelectAddressLocation={handleSelectAddressLocation}
      />
    ))}
  </Modal.Root>
)

interface Props {
  addresses: AddressLocation[]
  handleSelectAddressLocation: (addressLocation: AddressLocation) => void
  onClose: VoidFunction
}
