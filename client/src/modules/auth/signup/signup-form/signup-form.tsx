import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { RegisterOptions, useForm } from 'react-hook-form'

import { ButtonVariant } from '@ui/buttons/button'
import { authService } from '@modules/auth/api/auth.service'
import { useUserStore } from '@stores/user.store'
import { Routes } from '@router/routes.enum'
import * as Form from './signup-form.styled'

export interface SignupDataForm {
  name: string
  email: string
  password: string
  passwordRepeat: string
}

// TODO: Отображение ошибок.
// TODO: Валидация regex.
const SignupForm = () => {
  const router = useRouter()

  const { register, handleSubmit, resetField, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: ''
    }
  })

  const passwordValidationOptions = useMemo(() => {
    return {
      required: true,
      minLength: 4,
      maxLength: 24
    } as RegisterOptions
  }, [])

  const handleResetName = () => resetField('name')

  const handleResetEmail = () => resetField('email')

  const onSubmit = (data: SignupDataForm) => {
    authService
      .signup(data)
      .then(userData => {
        useUserStore.signin(userData)
      })
      .then(() => router.push(Routes.HOME))
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        type='text'
        placeholder='Как нам к Вам обращаться?'
        register={register('name', { required: true, minLength: 1 })}
        isEmpty={watch('name') === ''}
        onClear={handleResetName}
      />
      <Form.Input
        type='email'
        placeholder='Введите электронную почту'
        register={register('email', { required: true })}
        isEmpty={watch('email') === ''}
        onClear={handleResetEmail}
      />
      <Form.Input
        type='password'
        placeholder='Введите пароль'
        register={register('password', passwordValidationOptions)}
      />
      <Form.Input
        type='password'
        placeholder='Подтвердите пароль'
        register={register('passwordRepeat', {
          ...passwordValidationOptions,
          validate: value =>
            value === watch('password' || 'Пароли не совпадают')
        })}
      />
      <Form.SubmitButton
        text='Отправить'
        variant={ButtonVariant.PRIMARY}
        onClick={handleSubmit(onSubmit)}
      />
    </Form.Root>
  )
}

export default SignupForm
