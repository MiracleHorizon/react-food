import MainLayout from '@/layouts/main'
import { APP_TITLE } from '@/utils/constants/app'
import * as Styled from './home.styled'

const Home = () => {
  return (
    <MainLayout title={`${APP_TITLE} | Главная`}>
      <Styled.Wrapper></Styled.Wrapper>
    </MainLayout>
  )
}

export default Home
