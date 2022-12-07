import { FC } from 'react'

import * as Image from './ProductCard.styles'

// TODO Заменить img на next/image.
const ProductCardImage: FC<Props> = ({ imageUrl, title }) => (
  <Image.ImageContainer>
    <Image.Img src={imageUrl} alt={title} />
  </Image.ImageContainer>
)

export default ProductCardImage

interface Props {
  imageUrl: string
  title: string
}
