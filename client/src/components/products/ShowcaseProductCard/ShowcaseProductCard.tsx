import { type FC, memo, useMemo } from 'react'

import ShowcaseProductCardImage from './ShowcaseProductCardImage'
import ShowcaseProductCardContent from './ShowcaseProductCardContent'
import ShowcaseProductCardFooter from './ShowcaseProductCardFooter'
import { ShowcaseProduct } from '@entities/ShowcaseProduct'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import type { IShowcaseProductCardVariant } from './ShowcaseProductCard.types'
import { Root } from './ShowcaseProductCard.styled'

const ShowcaseProductCard: FC<Props> = ({
  variant,
  className,
  ...productData
}) => {
  const showcaseProduct = useMemo(
    () => new ShowcaseProduct(productData),
    [productData]
  )

  const {
    title,
    image,
    price: { withDiscount, discountPercent, mainPriceData }
  } = showcaseProduct

  return (
    <Root className={className} variant={variant}>
      <ShowcaseProductCardImage
        alt={title}
        imagePath={image}
        withDiscount={withDiscount}
        discountPercent={discountPercent}
        variant={variant}
      />
      <ShowcaseProductCardContent
        title={title}
        weight={showcaseProduct.formattedWeight}
        variant={variant}
        {...mainPriceData}
      />
      <ShowcaseProductCardFooter {...productData} />
    </Root>
  )
}

export default memo(ShowcaseProductCard)

type Props = ShowcaseProductModel &
  IShowcaseProductCardVariant &
  EmotionClassNameProps
