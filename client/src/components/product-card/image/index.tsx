import Image from 'next/image'
import type { FC } from 'react'

import Container from './ProductCardImage.styles'

const ProductCardImage: FC<Props> = ({ imageUrl, title }) => (
  <Container>
    <Image width={168} height={168} src={imageUrl} alt={title} />
  </Container>
)

export default ProductCardImage

interface Props {
  imageUrl: string
  title: string
}
