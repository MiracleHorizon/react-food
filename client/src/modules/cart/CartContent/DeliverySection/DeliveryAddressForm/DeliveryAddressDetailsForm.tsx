import { useForm } from 'react-hook-form'
import { type FC, type FormEvent, useEffect } from 'react'

import { useOrderStore } from '@stores/orderStore'
import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'
import * as Form from './DeliveryAddressDetailsForm.styled'

const DeliveryAddressDetailsForm: FC<Props> = ({ isOrdering, endOrdering }) => {
  const setDeliveryAddressDetails = useOrderStore(
    state => state.setDeliveryAddressDetails
  )

  const { register, watch, setFocus, getValues, formState } =
    useForm<DeliveryAddressDetailsForOrder>({
      defaultValues: {
        office: '',
        floor: '',
        doorcode: '',
        entrance: '',
        commentary: ''
      }
    })

  const handleSubmit = (e: FormEvent) => e.preventDefault()

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

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.FirstLine>
        <Form.Input
          type='text'
          labelTitle='Кв./офис'
          maxLength={5}
          setFocus={setFocus}
          isEmpty={watch('office') === ''}
          register={register('office', { required: true })}
        />
        <Form.Input
          type='text'
          labelTitle='Домофон'
          maxLength={20}
          setFocus={setFocus}
          isEmpty={watch('doorcode') === ''}
          register={register('doorcode', { required: true })}
        />
        <Form.Input
          type='text'
          labelTitle='Подъезд'
          maxLength={20}
          setFocus={setFocus}
          isEmpty={watch('entrance') === ''}
          register={register('entrance', { required: true })}
        />
        <Form.Input
          type='text'
          labelTitle='Этаж'
          maxLength={5}
          setFocus={setFocus}
          isEmpty={watch('floor') === ''}
          register={register('floor', { required: true })}
        />
      </Form.FirstLine>
      <Form.Input
        type='text'
        labelTitle='Комментарий к заказу'
        maxLength={255}
        setFocus={setFocus}
        isEmpty={watch('commentary') === ''}
        register={register('commentary')}
      />
    </Form.Root>
  )
}

export default DeliveryAddressDetailsForm

interface Props {
  isOrdering: boolean
  endOrdering: VoidFunction
}
