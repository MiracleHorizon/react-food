import { Routes } from '@router/Routes.enum'
import * as Content from './NotFoundContent.styled'

export const NotFoundContent = () => (
  <Content.Root>
    <Content.Title>404. Страница не найдена</Content.Title>
    <Content.Description>
      Возможно, она была перемещена, или Вы неверно указали адрес страницы.
    </Content.Description>
    <Content.HomeLink href={Routes.HOME}>Перейти на главную</Content.HomeLink>
  </Content.Root>
)
