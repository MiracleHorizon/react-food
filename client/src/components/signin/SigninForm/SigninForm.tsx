import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { authService } from '@api/AuthService'
import { cartService } from '@api/CartService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { ButtonVariant } from '@ui/Button'
import type { UserModel } from '@models/User'
import type { SigninDto } from '@app-types/auth/SigninDto'
import * as Form from './SigninForm.styled'

const SigninForm = () => {
  const [user, setUser] = useState<UserModel | null>(null)
  const signin = useUserStore(state => state.signin)
  const initializeCart = useCartStore(state => state.initialize)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    reValidateMode: 'onSubmit'
  })

  const onSubmit = async (dto: SigninDto) => {
    const user = await authService.signin(dto)
    setUser(user)
  }

  // TODO: ERROR HANDLING
  useEffect(() => {
    if (!user) return

    signin(user)
    cartService
      .fetchUserCart(user.id)
      .then(userCart => initializeCart(userCart))
  }, [initializeCart, signin, user])

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        type='email'
        placeholder='Введите электронную почту'
        register={register('email', { required: true })}
      />
      <Form.Input
        type='password'
        placeholder='Введите пароль'
        register={register('password', {
          required: true,
          minLength: 4,
          maxLength: 24
        })}
      />
      <Form.SubmitButton
        title='Войти'
        variant={ButtonVariant.PRIMARY}
        onClick={handleSubmit(onSubmit)}
      />
    </Form.Root>
  )
}

export default SigninForm
