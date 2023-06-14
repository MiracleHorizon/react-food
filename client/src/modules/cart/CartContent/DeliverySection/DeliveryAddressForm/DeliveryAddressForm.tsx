import { useForm } from 'react-hook-form'

import HiddenSubmitInput from '@components/HiddenSubmitInput'
import type { AddressFormData } from './DeliveryAddressForm.types'
import * as Form from './DeliveryAddressForm.styled'

const DeliveryAddressForm = () => {
  const { register, watch, handleSubmit, setFocus } = useForm({
    defaultValues: {
      office: '',
      floor: '',
      doorcode: '',
      entrance: '',
      commentary: ''
    }
  })

  const onSubmit = (data: AddressFormData) => {
    console.log(data)
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
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
      <HiddenSubmitInput />
    </Form.Root>
  )
}

export default DeliveryAddressForm
