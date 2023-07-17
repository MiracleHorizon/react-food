import { Routes } from '@router/Routes.enum'

export const getAuthPageTitle = (route: Routes): string => {
  switch (route) {
    case Routes.SIGNIN:
      return 'Вход'
    case Routes.SIGNUP:
      return 'Регистрация'
    default:
      return 'Авторизация'
  }
}
