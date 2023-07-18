import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { DeliveryAddressDetailsForm } from '@components/forms/DeliveryAddressDetailsForm'
import { useOrderStore } from '@stores/orderStore'
import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'

export const DeliveryAddressDetailsFormWrapper: FC<Props> = ({
  isOrdering,
  endOrdering
}) => {
  const setDeliveryAddressDetails = useOrderStore(
    state => state.setDeliveryAddressDetails
  )

  const { getValues, formState, ...otherUseFormParams } =
    useForm<DeliveryAddressDetailsForOrder>({
      defaultValues: {
        office: '',
        floor: '',
        doorcode: '',
        entrance: '',
        commentary: ''
      }
    })

  useEffect(() => {
    if (!isOrdering) return

    formState.isValid ? setDeliveryAddressDetails(getValues()) : endOrdering()
  }, [
    setDeliveryAddressDetails,
    formState.isValid,
    getValues,
    isOrdering,
    endOrdering
  ])

  return <DeliveryAddressDetailsForm {...otherUseFormParams} />
}

interface Props {
  isOrdering: boolean
  endOrdering: VoidFunction
}
