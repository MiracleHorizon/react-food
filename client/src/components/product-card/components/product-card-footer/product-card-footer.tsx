import {FC, useCallback} from 'react'
import {observer} from 'mobx-react-lite'

import SmallPlusSvg from '@ui/svg/small-plus-svg'
import SmallMinusSvg from '@ui/svg/small-minus-svg'
import {useCartStore} from '@stores/cart.store'
import type {ShowcaseProductModel} from '@entities/product'
import * as Footer from './product-card-footer.styled'

// TODO: Лишние перерисовки
const ProductCardFooter: FC<ShowcaseProductModel> = showcaseProduct => {
  const { id } = showcaseProduct

  const handleAddToCart = useCallback(() => {
    return useCartStore.addProduct(showcaseProduct)
  }, [showcaseProduct])

  const handleDecrementCount = useCallback(() => {
    return useCartStore.decrementProductCount(id)
  }, [id])

  const handleIncrementCount = useCallback(() => {
    return useCartStore.incrementProductCount(id)
  }, [id])

  return (
    <Footer.Root>
      <Footer.Content>
        {!useCartStore.isProductInCart(showcaseProduct.id) ? (
          <Footer.AddButton onClick={handleAddToCart}>
            <SmallPlusSvg />
          </Footer.AddButton>
        ) : (
          <Footer.ChangeCountLabel>
            <Footer.ChangeCountButton
              position='left'
              onClick={handleDecrementCount}
            >
              <SmallMinusSvg />
            </Footer.ChangeCountButton>
            <Footer.Count>{useCartStore.getProductCount(id)}</Footer.Count>
            <Footer.ChangeCountButton
              position='right'
              onClick={handleIncrementCount}
            >
              <SmallPlusSvg />
            </Footer.ChangeCountButton>
          </Footer.ChangeCountLabel>
        )}
      </Footer.Content>
    </Footer.Root>
  )
}

export default observer(ProductCardFooter)
