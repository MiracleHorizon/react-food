import type { AuthFormInputModel } from '@modules/Auth/models/AuthFormInputModel'

export const signupFormInputs: AuthFormInputModel[] = [
  {
    fieldName: 'email',
    type: 'email',
    placeholder: 'Введите Эл. почту'
  },
  {
    fieldName: 'name',
    type: 'text',
    placeholder: 'Как нам к Вам обращаться?'
  },
  {
    fieldName: 'password',
    type: 'password',
    placeholder: 'Введите пароль'
  }
]
