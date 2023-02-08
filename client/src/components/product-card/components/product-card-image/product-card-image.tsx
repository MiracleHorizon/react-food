import { FC, useMemo } from 'react'

import DiscountPercentLabel from '@ui/discount-percent-label'
import {
  IProductCardVariant,
  ProductCardVariant
} from '@components/product-card'
import * as Image from './product-card-image.styled'

const ProductCardImage: FC<Props> = ({
  alt,
  variant,
  imagePath,
  withDiscount,
  discountPercent
}) => {
  const imageSizes = useMemo(() => {
    return {
      width: variant === ProductCardVariant.DEFAULT ? 196 : 160,
      height: variant === ProductCardVariant.DEFAULT ? 168 : 147
    }
  }, [variant])

  return (
    <Image.Root variant={variant}>
      <Image.Image {...imageSizes} priority src={imagePath} alt={alt} />
      {withDiscount && <DiscountPercentLabel percent={discountPercent} />}
    </Image.Root>
  )
}

export default ProductCardImage

// TODO Pick
interface Props extends IProductCardVariant {
  alt: string
  imagePath: string
  withDiscount: boolean
  discountPercent: number
}
