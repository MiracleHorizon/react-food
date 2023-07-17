import type { AuthFormInputModel } from '@modules/Auth/models/AuthFormInputModel'

export const signinFormInputs: AuthFormInputModel[] = [
  {
    fieldName: 'email',
    type: 'email',
    placeholder: 'Введите Эл. почту'
  },
  {
    fieldName: 'password',
    type: 'password',
    placeholder: 'Введите пароль'
  }
]
