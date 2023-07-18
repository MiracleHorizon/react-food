import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWRMutation from 'swr/mutation'

import { AuthLayout } from '@modules/Auth/layout'
import { AuthForm } from '@modules/Auth/components/AuthForm'
import { authService } from '@api/AuthService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { signupFormInputs } from '../inputs'
import { Routes } from '@router/Routes.enum'
import type { SignupDto } from '@app-types/auth/SignupDto'
import type { SwrFetcherArgs } from '@models/SwrFetcherArgs'

const defaultValues: SignupDto = {
  name: '',
  email: '',
  password: ''
}

const fetcher = (...args: SwrFetcherArgs<SignupDto>) => {
  const [, dto] = args
  return authService.signup(dto.arg)
}

// TODO: Error handling
// TODO: Совпадение паролей
export const SignupScreen = () => {
  const router = useRouter()
  const { data, trigger } = useSWRMutation('signup', fetcher)

  const signin = useUserStore(state => state.signin)
  const initializeCart = useCartStore(state => state.initialize)

  const handleSignup = (dto: SignupDto) => trigger(dto)

  useEffect(() => {
    if (!data) return

    const { user, cart } = data
    signin(user)
    initializeCart(cart)

    router.push(Routes.HOME)
  }, [data, router, signin, initializeCart])

  return (
    <AuthLayout>
      <AuthForm
        inputs={signupFormInputs}
        defaultValues={defaultValues}
        onSubmit={handleSignup}
      />
    </AuthLayout>
  )
}
