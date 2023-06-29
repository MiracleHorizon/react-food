import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { authService } from '@api/AuthService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { ButtonVariant } from '@ui/Button'
import type { UserData } from '@models/user/UserData'
import type { SigninDto } from '@app-types/auth/SigninDto'
import * as Form from './SigninForm.styled'

const SigninForm = () => {
  const [userData, setUserData] = useState<UserData | null>(null)
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
    setUserData(user)
  }

  // TODO: ERROR HANDLING
  useEffect(() => {
    if (!userData) return

    const { user, cart } = userData
    signin(user)
    initializeCart(cart)
  }, [initializeCart, signin, userData])

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
