import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, ButtonVariant } from '@ui/Button'
import { DeliveryAddressDetailsForm } from '@components/forms/DeliveryAddressDetailsForm'
import { DeliveryAddressLocationForm } from '@components/forms/DeliveryAddressLocationForm'
import type { AddressLocation } from '@models/user/AddressLocation'
import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'
import * as Styled from './AddDeliveryAddress.styled'

export const AddDeliveryAddress: FC<Props> = ({ endAdding }) => {
  const [addressLocation, setAddressLocation] =
    useState<AddressLocation | null>(null)
  const { formState, getValues, ...otherUseFormParams } =
    useForm<DeliveryAddressDetailsForOrder>({
      defaultValues: {
        office: '',
        doorcode: '',
        entrance: '',
        floor: '',
        commentary: ''
      }
    })

  const handleAddDeliveryAddress = async () => {
    if (!formState.isValid || !addressLocation) return

    console.log(addressLocation)
    console.log(getValues())

    endAdding()
  }

  const handleSelectAddressLocation = (addressLocation: AddressLocation) =>
    setAddressLocation(addressLocation)

  return (
    <div>
      <DeliveryAddressLocationForm
        initialValue=''
        handleSelectAddressLocation={handleSelectAddressLocation}
      />
      <DeliveryAddressDetailsForm {...otherUseFormParams} />
      <Styled.Actions>
        <Button
          title='Отмена'
          variant={ButtonVariant.SECONDARY}
          onClick={endAdding}
        />
        <Button
          isDisabled={!formState.isValid}
          title='Добавить'
          variant={ButtonVariant.PRIMARY}
          onClick={handleAddDeliveryAddress}
        />
      </Styled.Actions>
    </div>
  )
}

interface Props {
  endAdding: VoidFunction
}
