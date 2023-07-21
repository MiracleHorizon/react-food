import { AUTHOR_GITHUB_LINK } from '@constants/development'
import * as Slide from './DescriptionSlide.styled'

export const DescriptionSlide = () => (
  <Slide.Root>
    <Slide.Title>Добро пожаловать!</Slide.Title>
    <Slide.Text>
      Данный проект не является коммерческим. Просьба не использовать свои
      настоящие данные
    </Slide.Text>
    <Slide.AuthorText>
      По всем вопросам можно обратиться к автору:{' '}
      <Slide.AuthorLink href={AUTHOR_GITHUB_LINK} target='__blank'>
        MiracleHorizon
      </Slide.AuthorLink>
    </Slide.AuthorText>
  </Slide.Root>
)
