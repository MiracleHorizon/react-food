import { type FC, useMemo } from 'react'

import {
  type IShowcaseProductCardVariant,
  ShowcaseProductCardVariant
} from '../ShowcaseProductCard.types'
import * as Image from './ShowcaseProductCardImage.styled'

const ShowcaseProductCardImage: FC<Props> = ({
  alt,
  imagePath,
  variant,
  withDiscount,
  discountPercent
}) => {
  const imageSizes = useMemo(() => {
    return {
      width: variant === ShowcaseProductCardVariant.DEFAULT ? 196 : 160,
      height: variant === ShowcaseProductCardVariant.DEFAULT ? 168 : 147
    }
  }, [variant])

  return (
    <Image.Root variant={variant}>
      <Image.Image priority src={imagePath} alt={alt} {...imageSizes} />
      {withDiscount && (
        <Image.DiscountPercentLabel
          variant={variant}
          discountPercent={discountPercent}
        />
      )}
    </Image.Root>
  )
}

export default ShowcaseProductCardImage

interface Props extends IShowcaseProductCardVariant {
  alt: string
  imagePath: string
  withDiscount: boolean
  discountPercent: number
}
