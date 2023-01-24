import { FC, memo, useCallback, useMemo } from 'react'

import CardContent from './product-card-content'
import CardFooter from './product-card-footer'
import CartStore from '@/stores/Cart.store'
import { Product, ProductModel } from '@/entities/product'
import * as Card from './product-card.styled'

// TODO Обработка ошибки получения изображения продукта.
const ProductCard: FC<ProductModel> = productData => {
  const product = useMemo(() => new Product(productData), [productData])
  const { id, title } = product

  const handleDecrementCount = useCallback(() => {
    CartStore.decrementProductCount(id)
  }, [id])

  const handleIncrementCount = useCallback(() => {
    CartStore.incrementProductCount(id)
  }, [id])

  return (
    <Card.Root imageLoadError={!product.imageUrl}>
      <Card.Image
        width={196}
        height={168}
        src={product.getImageUrl()}
        alt={title}
      />
      <CardContent
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
