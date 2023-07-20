import { type FC, useCallback, useEffect, useState } from 'react'

import { SearchAddressesModal } from '@components/general/SearchAddressesModal'
import { useInput } from '@hooks/useInput'
import { useToggle } from '@hooks/useToggle'
import { searchService } from '@api/SearchService'
import type { AddressLocation } from '@models/user/AddressLocation'
import * as Form from './DeliveryAddressLocationForm.styled'

export const DeliveryAddressLocationForm: FC<Props> = ({
  initialValue,
  handleSelectAddressLocation
}) => {
  const { value, handleChange } = useInput(initialValue)
  const [addresses, setAddresses] = useState<AddressLocation[]>([])

  const { isOpen, open, close } = useToggle(false)

  const search = useCallback(async () => {
    if (value.length === 0) return

    const addresses = await searchService.searchAddressesLocations(value)
    setAddresses(addresses)

    if (addresses.length > 0) open()
  }, [open, value])

  const handleInputFocus = () => search()

  useEffect(() => {
    search()
  }, [search])

  // useEventListener('blur', close)

  return (
    <Form.Root onSubmit={e => e.preventDefault()}>
      <Form.InputWrapper>
        <Form.Input
          type='text'
          placeholder='Адрес доставки'
          value={value}
          onChange={handleChange}
          onFocus={handleInputFocus}
        />
      </Form.InputWrapper>
      {isOpen && addresses.length > 0 && (
        <SearchAddressesModal
          addresses={addresses}
          handleSelectAddressLocation={handleSelectAddressLocation}
          onClose={close}
        />
      )}
    </Form.Root>
  )
}

interface Props {
  initialValue: string
  handleSelectAddressLocation: (addressLocation: AddressLocation) => void
}
