import { useForm } from 'react-hook-form'
import type { FC } from 'react'

import AuthFormInput from './AuthFormInput'
import * as Form from './AuthForm.styled'

const inputs = [
  {
    fieldName: 'email',
    type: 'email'
  },
  {
    fieldName: 'name',
    type: 'text'
  }
]

const AuthForm: FC<Props> = ({ defaultValues }) => {
  const { register } = useForm({
    defaultValues
  })

  return (
    <Form.Root>
      {inputs.map(({ fieldName, type }) => (
        <AuthFormInput
          key={fieldName}
          register={register(fieldName)}
          type={type}
        />
      ))}
    </Form.Root>
  )
}

export default AuthForm

interface Props {
  defaultValues: any
}
