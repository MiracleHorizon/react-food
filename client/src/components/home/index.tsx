import DefaultLayout from '@/layouts/default'
import { APP_TITLE } from '@/utils/constants/app'
import * as Styled from './Home.styles'

const Home = () => {
  return (
    <DefaultLayout title={APP_TITLE}>
      <Styled.Wrapper>
        <h3>Домашняя страница</h3>
      </Styled.Wrapper>
    </DefaultLayout>
  )
}

export default Home
