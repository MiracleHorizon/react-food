import { FC, memo, useCallback, useMemo } from 'react'

import ItemContent from './cart-panel-item-content'
import ChangeCountLabel from './change-count-label'
import { cartStore } from '@/stores/cart.store'
import { Product, ProductModel } from '@/entities/product'
import * as Item from './cart-panel-item.styled'

const CartPanelItem: FC<Props> = ({ lastInOrder, ...productData }) => {
  const product = useMemo(() => new Product(productData), [productData])
  const { id, title, count } = product

  const handleDecrementCount = useCallback(() => {
    cartStore.decrementProductCount(id)
  }, [id])

  const handleIncrementCount = useCallback(() => {
    cartStore.incrementProductCount(id)
  }, [id])

  return (
    <Item.Root lastInOrder={lastInOrder}>
      <Item.Image
        width={Item.imageSize}
        height={Item.imageSize}
        src={product.getImageUrl()}
        alt={title}
      />
      <ItemContent
        title={title}
        weight={product.getFormattedWeight()}
        price={product.getFormattedPrice()}
      />
      <ChangeCountLabel
        count={count}
        increment={handleIncrementCount}
        decrement={handleDecrementCount}
      />
    </Item.Root>
  )
}

export default memo(CartPanelItem)

interface Props extends ProductModel {
  lastInOrder: boolean
}
