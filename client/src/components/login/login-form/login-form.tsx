import { useForm } from 'react-hook-form'

import { authService } from '@/modules/auth/api/auth.service'
import { useUserStore } from '@/stores/user.store'
import { cartService } from '@/api/services/cart.service'
import { useCartStore } from '@/stores/cart.store'
import { Routes } from '@router/routes.enum'
import { ButtonVariant } from '@/ui/buttons/button'
import type { LoginData } from '../login.types'
import * as Form from './login-form.styled'

// TODO: Отображение ошибок.
const LoginForm = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (loginData: LoginData) => {
    authService
      .signin(loginData)
      .then(userData => {
        useUserStore.signin(userData)
        return userData
      })
      .then(({ id }) =>
        cartService.fetchCart(id).then(cart => useCartStore.initialize(cart))
      )
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        type='email'
        placeholder='Электронная почта'
        register={register('email', { required: true })}
      />
      <Form.Input
        type='password'
        placeholder='Пароль'
        register={register('password', {
          required: true,
          minLength: 4,
          maxLength: 24
        })}
      />
      <Form.SignupLink href={Routes.SIGNUP}>
        Еще нет аккаунта? Зарегистрируйтесь
      </Form.SignupLink>
      <Form.SubmitButton
        text='Войти'
        variant={ButtonVariant.PRIMARY}
        onClick={handleSubmit(onSubmit)}
      />
    </Form.Root>
  )
}

export default LoginForm
