import ProductCardSkeleton from '@/components/Cards/Product/Skeleton'
import * as Styled from './Home.styles'

const Home = () => {
  return (
    <div>
      <Styled.List>
        <ProductCardSkeleton />
      </Styled.List>
    </div>
  )
}

export default Home
