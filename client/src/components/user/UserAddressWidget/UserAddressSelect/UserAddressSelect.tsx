import { Listbox } from '@headlessui/react'
import type { FC, PropsWithChildren } from 'react'

import UserAddressSelectOption from './UserAddressSelectOption'
import { useUserStore } from '@stores/userStore'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'
import * as Select from './UserAddressSelect.styled'

const UserAddressSelect: FC<Props> = ({
  children,
  addresses,
  selectedAddress
}) => {
  const setSelectedAddress = useUserStore(state => state.setSelectedAddress)

  const changeSelectedAddress = (address: DeliveryAddress) =>
    setSelectedAddress(address)

  return (
    <Select.Root>
      <Listbox onChange={changeSelectedAddress}>
        {children}
        <Listbox.Options as={Select.Options}>
          {addresses.map(address => (
            <UserAddressSelectOption
              key={address.id}
              isSelected={selectedAddress.id === address.id}
              {...address}
            />
          ))}
        </Listbox.Options>
      </Listbox>
    </Select.Root>
  )
}

export default UserAddressSelect

interface Props extends PropsWithChildren {
  addresses: DeliveryAddress[]
  selectedAddress: DeliveryAddress
}
