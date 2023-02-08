import SignupForm from './signup-form'
import AuthLayout from '../layout'
import { APP_TITLE } from '@utils/constants/app'
import * as Signup from './signup.styled'

const SignupComponent = () => (
  <AuthLayout title={`Регистрация | ${APP_TITLE}`}>
    <Signup.Root>
      <Signup.Title>Регистрация</Signup.Title>
      <SignupForm />
    </Signup.Root>
  </AuthLayout>
)

export default SignupComponent
