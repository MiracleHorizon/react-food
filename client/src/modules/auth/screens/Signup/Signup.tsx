import { useMemo } from 'react'

import AuthLayout from '@layouts/Auth'
// import SignupForm from './SignupForm'
import AuthForm from '../../components/AuthForm'

const SignupComponent = () => {
  // const navigateToHome = () => router.push(Routes.HOME)

  // const handleSubmitForm = (dto: SignupDto) =>
  //   authService.signup(dto).then(navigateToHome)

  const defaultValues = useMemo(
    () => ({
      email: '',
      password: '',
      name: ''
    }),
    []
  )

  return (
    <AuthLayout title='Регистрация'>
      <AuthForm defaultValues={defaultValues} />
      {/*<Signup.Root>*/}
      {/*<Signup.Title>Регистрация</Signup.Title>*/}
      {/*<SignupForm onSubmit={handleSubmitForm} />*/}
      {/*</Signup.Root>*/}
    </AuthLayout>
  )
}

export default SignupComponent
