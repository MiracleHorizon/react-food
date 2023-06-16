import { useEffect } from 'react'
import { Listbox } from '@headlessui/react'

import UserAddressSelect from './UserAddressSelect'
import { useToggle } from '@hooks/useToggle'
import { useUserStore } from '@stores/userStore'
import { getUserAddressString } from '@helpers/getUserAddressString'
import * as Widget from './UserAddressWidget.styled'

const UserAddressWidget = () => {
  const { isOpen, toggle } = useToggle(false)
  const addresses = useUserStore(state => state.addresses)
  const isAddressesEmpty = useUserStore(state => state.isAddressesEmpty())
  const selectedAddress = useUserStore(state => state.selectedAddress)
  const setSelectedAddress = useUserStore(state => state.setSelectedAddress)

  useEffect(() => {
    if (!selectedAddress && !isAddressesEmpty) {
      const firstAddress = addresses[0]!
      setSelectedAddress(firstAddress)
    }
  }, [addresses, isAddressesEmpty, selectedAddress, setSelectedAddress])

  if (!selectedAddress || isAddressesEmpty) {
    return null
  }

  return (
    <div>
      <UserAddressSelect
        selectedAddress={selectedAddress}
        addresses={addresses}
      >
        <Listbox.Button as={Widget.Button} onClick={toggle}>
          <Widget.MapPinIcon />
          <Widget.Title>{getUserAddressString(selectedAddress)}</Widget.Title>
          <Widget.ArrowIcon open={isOpen} />
        </Listbox.Button>
      </UserAddressSelect>
    </div>
  )
}

export default UserAddressWidget
