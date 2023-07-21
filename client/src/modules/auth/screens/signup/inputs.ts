import type { AuthFormInputModel } from '@modules/Auth/models/AuthFormInputModel'

// TODO: Валидация
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
    fieldName: 'phoneNumber',
    type: 'tel',
    placeholder: '+7'
  },
  {
    fieldName: 'password',
    type: 'password',
    placeholder: 'Введите пароль'
  }
]
