import NotFoundContent from './not-found-content'
import HeadComponent from '@/components/HeadComponent'
import notFoundImage from '@/public/images/not-found-image.png'
import * as NotFound from './not-found.styled'

const NotFoundComponent = () => (
  <NotFound.Root>
    <HeadComponent title='404 - Страница не найдена' />
    <NotFound.Wrapper>
      <NotFoundContent />
      <NotFound.Image
        priority
        src={notFoundImage.src}
        width={500}
        height={280}
        alt='Not found'
      />
    </NotFound.Wrapper>
  </NotFound.Root>
)

export default NotFoundComponent
