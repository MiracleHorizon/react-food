import type {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetFocus,
  UseFormWatch
} from 'react-hook-form'
import type { FC, FormEvent } from 'react'

import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'
import * as Form from './DeliveryAddressDetailsForm.styled'

const DeliveryAddressDetailsForm: FC<Props> = ({
  register,
  setFocus,
  watch,
  submitActions
}) => {
  const handleSubmit = (e: FormEvent) => {
    if (submitActions) {
      const { handler, onSubmit } = submitActions
      return handler(onSubmit)
    }

    return e.preventDefault
  }

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
  setFocus: UseFormSetFocus<DeliveryAddressDetailsForOrder>
  watch: UseFormWatch<DeliveryAddressDetailsForOrder>
  register: UseFormRegister<DeliveryAddressDetailsForOrder>
  submitActions?: {
    handler: UseFormHandleSubmit<DeliveryAddressDetailsForOrder>
    onSubmit: (data: DeliveryAddressDetailsForOrder) => void
  }
}
