import { Head } from '@components/seo/Head'
import { NotFoundContent } from './NotFoundContent'
import notFoundImage from '@public/images/404.png'
import * as Styled from './NotFound.styled'

export const NotFound = () => (
  <>
    <Head title='Страница не найдена' />
    <Styled.Root>
      <Styled.Wrapper>
        <NotFoundContent />
        <Styled.Image
          src={notFoundImage.src}
          priority
          width={500}
          height={280}
          alt='Not found'
        />
      </Styled.Wrapper>
    </Styled.Root>
  </>
)
