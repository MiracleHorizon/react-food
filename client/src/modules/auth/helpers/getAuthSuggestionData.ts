import { Routes } from '@router/Routes.enum'

export const getAuthSuggestionData = (route: Routes): Result => {
  switch (route) {
    case Routes.SIGNIN:
      return {
        title: 'Еще нет аккаунта?',
        linkTitle: 'Зарегистрируйтесь',
        href: Routes.SIGNUP
      }
    case Routes.SIGNUP:
      return {
        title: 'Уже есть аккаунт?',
        linkTitle: 'Войдите',
        href: Routes.SIGNIN
      }
    default:
      return {
        title: 'На главную',
        linkTitle: 'Вернуться',
        href: Routes.HOME
      }
  }
}

interface Result {
  title: string
  linkTitle: string
  href: Routes
}
