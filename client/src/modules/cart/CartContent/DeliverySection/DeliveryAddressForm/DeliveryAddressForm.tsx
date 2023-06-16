import { useForm } from 'react-hook-form'
import { type FC, FormEvent, useEffect } from 'react'

import { useOrderStore } from '@stores/orderStore'
import * as Form from './DeliveryAddressForm.styled'

const DeliveryAddressForm: FC<Props> = ({ isOrdering, endOrdering }) => {
  const setDeliveryAddress = useOrderStore(state => state.setDeliveryAddress)

  const { register, watch, setFocus, getValues, formState } = useForm({
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

    formState.isValid ? setDeliveryAddress(getValues()) : endOrdering()
  }, [
    formState.isValid,
    getValues,
    setDeliveryAddress,
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

export default DeliveryAddressForm

interface Props {
  isOrdering: boolean
  endOrdering: VoidFunction
}
