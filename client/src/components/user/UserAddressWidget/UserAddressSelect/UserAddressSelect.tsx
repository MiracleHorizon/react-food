import { Listbox } from '@headlessui/react'
import type { FC, PropsWithChildren } from 'react'

import UserAddressSelectOption from './UserAddressSelectOption'
import { useUserStore } from '@stores/userStore'
import type { UserAddress } from '@models/user/UserAddress'
import * as Select from './UserAddressSelect.styled'

const UserAddressSelect: FC<Props> = ({
  children,
  addresses,
  selectedAddress
}) => {
  const setSelectedAddress = useUserStore(state => state.setSelectedAddress)

  const changeSelectedAddress = (address: UserAddress) =>
    setSelectedAddress(address)

  return (
    <Select.Root>
      <Listbox onChange={changeSelectedAddress}>
        {children}
        <Listbox.Options as={Select.Options}>
          {addresses.map(address => (
            <UserAddressSelectOption
              key={address.main.id}
              isSelected={selectedAddress.main.id === address.main.id}
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
  addresses: UserAddress[]
  selectedAddress: UserAddress
}
