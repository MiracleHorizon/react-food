import { Routes } from '@/types/routes'
import * as Content from './not-found-content.styled'

const NotFoundContent = () => (
  <Content.Root>
    <Content.Title>404. Страница не найдена</Content.Title>
    <Content.Description>
      Возможно, она была перемещена, или Вы неверно указали адрес страницы.
    </Content.Description>
    <Content.HomeLink href={Routes.HOME}>Перейти на главную</Content.HomeLink>
  </Content.Root>
)

export default NotFoundContent
