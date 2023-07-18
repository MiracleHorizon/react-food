import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWRMutation from 'swr/mutation'

import { AuthLayout } from '@modules/Auth/layout'
import { AuthForm } from '@modules/Auth/components/AuthForm'
import { authService } from '@api/AuthService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { signinFormInputs } from '../inputs'
import { Routes } from '@router/Routes.enum'
import type { SigninDto } from '@app-types/auth/SigninDto'
import type { SwrFetcherArgs } from '@models/SwrFetcherArgs'

const defaultValues: SigninDto = {
  email: '',
  password: ''
}

const fetcher = (...args: SwrFetcherArgs<SigninDto>) => {
  const [, dto] = args
  return authService.signin(dto.arg)
}

export const SigninScreen = () => {
  const router = useRouter()
  const { data, trigger } = useSWRMutation('signin', fetcher)

  const signin = useUserStore(state => state.signin)
  const initializeCart = useCartStore(state => state.initialize)

  const handleSignin = (dto: SigninDto) => trigger(dto)

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
        inputs={signinFormInputs}
        defaultValues={defaultValues}
        onSubmit={handleSignin}
      />
    </AuthLayout>
  )
}
