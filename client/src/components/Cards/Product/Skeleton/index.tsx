import ContentLoader from 'react-content-loader'

import ImageContainer from '../Image/ProductCardImage.styles'
import * as Card from '../ProductCard.styles'

// TODO Доделать
const ProductCardSkeleton = () => {
  return (
    <Card.Root>
      <Card.Content>
        <ImageContainer style={{ marginBottom: 12 }}>
          <ContentLoader
            speed={2}
            width='100%'
            height='100%'
            viewBox='0 0 193 168'
            backgroundColor='#e6e6e6'
            foregroundColor='#d6d6d6'
          >
            <rect x='0' y='0' rx='18' ry='18' width='100%' height='168' />
          </ContentLoader>
        </ImageContainer>
        <div>
          <ContentLoader
            speed={2}
            width='100%'
            height='100%'
            viewBox='0 0 193 46'
            backgroundColor='#e6e6e6'
            foregroundColor='#d6d6d6'
          >
            <rect x='0' y='0' rx='12' ry='12' width='100%' height='168' />
          </ContentLoader>
        </div>
      </Card.Content>
    </Card.Root>
  )
}

export default ProductCardSkeleton
