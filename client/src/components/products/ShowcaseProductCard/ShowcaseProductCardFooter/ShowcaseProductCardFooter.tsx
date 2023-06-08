import { type FC, memo, useCallback } from 'react'
import { useRouter } from 'next/router'

import SmallPlusSvg from '@ui/svg/SmallPlusSvg'
import SmallMinusSvg from '@ui/svg/SmallMinusSvg'
import { useCartStore } from '@stores/cartStore'
import { useUserStore } from '@stores/userStore'
import { Routes } from '@router/Routes.enum'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import * as Footer from './ShowcaseProductCardFooter.styled'

const ShowcaseProductCardFooter: FC<ShowcaseProductModel> = showcaseProduct => {
  const router = useRouter()
  const { id } = showcaseProduct
  const isAuth = useUserStore(state => state.isAuth())
  const isProductInCart = useCartStore(state => state.isProductInCart(id))
  const productCount = useCartStore(state => state.getProductCount(id))
  const addProduct = useCartStore(state => state.addProduct)
  const incrementProductCount = useCartStore(
    state => state.incrementProductCount
  )
  const decrementProductCount = useCartStore(
    state => state.decrementProductCount
  )

  const handleAddToCart = useCallback(() => {
    isAuth ? addProduct(showcaseProduct) : router.replace(Routes.SIGNIN)
  }, [isAuth, showcaseProduct.id, addProduct, router])

  const handleIncrementCount = useCallback(
    () => incrementProductCount(id),
    [id, incrementProductCount]
  )

  const handleDecrementCount = useCallback(
    () => decrementProductCount(id),
    [decrementProductCount, id]
  )

  return (
    <Footer.Root>
      <Footer.Wrapper>
        {!isProductInCart ? (
          <Footer.AddButton onClick={handleAddToCart}>
            <SmallPlusSvg />
          </Footer.AddButton>
        ) : (
          <Footer.ChangeCountLabel>
            <Footer.ChangeCountButton
              placement='left'
              onClick={handleDecrementCount}
            >
              <SmallMinusSvg />
            </Footer.ChangeCountButton>
            <Footer.Count>{productCount}</Footer.Count>
            <Footer.ChangeCountButton
              placement='right'
              onClick={handleIncrementCount}
            >
              <SmallPlusSvg />
            </Footer.ChangeCountButton>
          </Footer.ChangeCountLabel>
        )}
      </Footer.Wrapper>
    </Footer.Root>
  )
}

export default memo(ShowcaseProductCardFooter)
