import { Routes } from '@router/Routes.enum'

export const getAuthHeroTitle = (route: Routes): string => {
  switch (route) {
    case Routes.SIGNIN:
      return 'Войдите в свой аккаунт'
    case Routes.SIGNUP:
      return 'Зарегистрируйтесь'
    default:
      return 'Добро пожаловать!'
  }
}
