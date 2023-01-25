import { FC, memo, useCallback, useMemo } from 'react'

import ItemContent from './order-product-item-content'
import ChangeCountLabel from '@/ui/change-count-label'
import { cartStore } from '@/stores/cart.store'
import { Product, ProductModel } from '@/entities/product'
import * as Item from './order-product-item.styled'

const OrderProductItem: FC<ProductModel> = productData => {
  const product = useMemo(() => new Product(productData), [productData])
  const { id, title, count } = product

  const handleIncrementCount = useCallback(() => {
    cartStore.incrementProductCount(id)
  }, [id])

  const handleDecrementCount = useCallback(() => {
    cartStore.decrementProductCount(id)
  }, [id])

  return (
    <Item.Root>
      <ItemContent
        title={title}
        imageUrl={product.getImageUrl()}
        weight={product.getFormattedWeight()}
      />
      <ChangeCountLabel
        value={count}
        increment={handleIncrementCount}
        decrement={handleDecrementCount}
      />
      <Item.Price>{product.getFormattedPrice()}</Item.Price>
    </Item.Root>
  )
}

export default memo(OrderProductItem)
