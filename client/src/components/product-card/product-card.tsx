import { FC, memo, useCallback, useMemo } from 'react'

import CardContent from './product-card-content'
import CardFooter from './product-card-footer'
import { cartStore } from '@/stores/cart.store'
import { Product, ProductModel } from '@/entities/product'
import { IProductCardVariant, ProductCardVariant } from './product-card-models'
import * as Card from './product-card.styled'

// TODO Обработка ошибки получения изображения продукта.
const ProductCard: FC<ProductModel & IProductCardVariant> = ({
  variant,
  ...productData
}) => {
  const product = useMemo(() => new Product(productData), [productData])
  const { id, title } = product

  const imageSizes = useMemo(() => {
    return {
      width: variant === ProductCardVariant.DEFAULT ? 196 : 160,
      height: variant === ProductCardVariant.DEFAULT ? 168 : 147
    }
  }, [variant])

  const handleDecrementCount = useCallback(() => {
    cartStore.decrementProductCount(id)
  }, [id])

  const handleIncrementCount = useCallback(() => {
    cartStore.incrementProductCount(id)
  }, [id])

  return (
    <Card.Root variant={variant} imageLoadError={!product.imageUrl}>
      <Card.Image {...imageSizes} src={product.getImageUrl()} alt={title} />
      <CardContent
        variant={variant}
        title={title}
        price={product.getFormattedPrice()}
        weight={product.getFormattedWeight()}
      />
      <CardFooter
        {...product}
        increment={handleIncrementCount}
        decrement={handleDecrementCount}
      />
    </Card.Root>
  )
}

export default memo(ProductCard)
