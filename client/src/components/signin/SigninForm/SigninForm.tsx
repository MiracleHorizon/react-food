import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { authService } from '@api/AuthService'
import { cartService } from '@api/CartService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { ButtonVariant } from '@ui/Button'
import type { SigninDto } from '@app-types/auth/SigninDto'
import * as Form from './SigninForm.styled'

const SigninForm = () => {
  const signin = useUserStore(state => state.signin)
  const initializeCart = useCartStore(state => state.initialize)
  const { data: user, mutate: signinMutation } = useMutation({
    mutationKey: ['signin'],
    mutationFn: authService.signin
  })
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    reValidateMode: 'onSubmit'
  })

  const onSubmit = (dto: SigninDto) => signinMutation(dto)

  useEffect(() => {
    if (!user) return

    signin(user)
    // TODO: ERROR HANDLING
    cartService.fetchUserCart(user.id).then(({ id, products }) =>
      initializeCart({
        userCartId: id,
        products
      })
    )
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
