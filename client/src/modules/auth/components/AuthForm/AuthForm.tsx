import {
  type DeepPartial,
  type FieldValues,
  type Path,
  useForm
} from 'react-hook-form'

import { ButtonVariant } from '@ui/Button'
import type { AuthFormInputModel } from '@modules/Auth/models/AuthFormInputModel'
import * as Form from './AuthForm.styled'

// TODO: Восстановление пароля
export const AuthForm = <T extends FieldValues>({
  inputs,
  defaultValues,
  onSubmit
}: Props<T>) => {
  const { handleSubmit, register } = useForm({
    defaultValues
  })

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(input => (
        <Form.Input
          key={input.fieldName}
          register={register(input.fieldName as Path<T>, {
            required: true
          })}
          {...input}
        />
      ))}
      <Form.SubmitButton
        variant={ButtonVariant.PRIMARY}
        type='submit'
        title='Отправить'
      />
    </Form.Root>
  )
}

interface Props<T extends FieldValues> {
  defaultValues: DeepPartial<T>
  onSubmit: (data: T) => void
  inputs: AuthFormInputModel[]
}
