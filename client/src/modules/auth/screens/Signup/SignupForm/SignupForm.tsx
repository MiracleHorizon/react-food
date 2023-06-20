import { type FC, useCallback, useMemo } from 'react'
import { type RegisterOptions, useForm } from 'react-hook-form'

import { ButtonVariant } from '@ui/Button'
import * as Form from './SignupForm.styled'

const SignupForm: FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, resetField, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: ''
    },
    reValidateMode: 'onSubmit'
  })

  const passwordValidationOptions = useMemo(
    () =>
      ({
        required: true,
        minLength: 4,
        maxLength: 24
      } as RegisterOptions),
    []
  )

  const handleResetNameField = useCallback(
    () => resetField('name'),
    [resetField]
  )

  const handleResetEmailField = useCallback(
    () => resetField('email'),
    [resetField]
  )

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        type='text'
        placeholder='Как к Вам обращаться?'
        register={register('name', { required: true, minLength: 1 })}
        isEmpty={watch('name') === ''}
        onClear={handleResetNameField}
      />
      <Form.Input
        type='email'
        placeholder='Укажите электронную почту'
        register={register('email', { required: true })}
        isEmpty={watch('email') === ''}
        onClear={handleResetEmailField}
      />
      <Form.Input
        type='password'
        placeholder='Придумайте пароль'
        register={register('password', passwordValidationOptions)}
      />
      <Form.Input
        type='password'
        placeholder='Подтвердите пароль'
        register={register('passwordRepeat', {
          validate: value =>
            value === watch('password' || 'Пароли не совпадают'),
          ...passwordValidationOptions
        })}
      />
      <Form.SubmitButton
        title='Зарегистрироваться'
        variant={ButtonVariant.PRIMARY}
        onClick={handleSubmit(onSubmit)}
      />
    </Form.Root>
  )
}

export default SignupForm

// TODO: Types
interface Props {
  onSubmit: any
}
