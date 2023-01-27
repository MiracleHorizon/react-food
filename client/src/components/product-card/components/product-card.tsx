import { FC, memo, useCallback, useMemo } from 'react'

import CardContent from './product-card-content'
import CardFooter from './product-card-footer'
import CardImage from './product-card-image'
import { cartStore } from '@/stores/cart.store'
import { Product, ProductModel } from '@/entities/product'
import type { IProductCardVariant } from '../product-card-models'
import StyledWrapper from './product-card.styled'

// TODO Обработка ошибки получения изображения продукта.
const ProductCard: FC<ProductModel & IProductCardVariant> = ({
  variant,
  ...productData
}) => {
  const product = useMemo(() => new Product(productData), [productData])
  const {
    id,
    title,
    price: {
      fullPrice,
      formattedPrice,
      formattedFullPrice,
      discountPercent,
      withDiscount
    }
  } = product

  const priceData = useMemo(() => {
    return {
      price: formattedPrice,
      fullPrice: formattedFullPrice,
      withDiscount
    }
  }, [formattedFullPrice, formattedPrice, withDiscount])

  const handleDecrementCount = useCallback(() => {
    cartStore.decrementProductCount(id)
  }, [id])

  const handleIncrementCount = useCallback(() => {
    cartStore.incrementProductCount(id)
  }, [id])

  return (
    <StyledWrapper
      data-el='product-card'
      variant={variant}
      imageLoadError={!product.imagePath}
    >
      <CardImage
        alt={title}
        variant={variant}
        imagePath={product.image}
        withDiscount={withDiscount}
        discountPercent={discountPercent}
      />
      <CardContent
        variant={variant}
        title={title}
        weight={product.formattedWeight}
        {...priceData}
      />
      <CardFooter
        {...product}
        fullPrice={fullPrice}
        discountPercent={discountPercent}
        increment={handleIncrementCount}
        decrement={handleDecrementCount}
      />
    </StyledWrapper>
  )
}

export default memo(ProductCard)
