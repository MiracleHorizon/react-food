import type { FC } from 'react'

import SmallPlusSvg from '@/ui/svg/small-plus-svg'
import SmallMinusSvg from '@/ui/svg/small-minus-svg'
import { cartStore } from '@/stores/cart.store'
import type { ProductModel } from '@/entities/product'
import * as Footer from './product-card-footer.styled'

const ProductCardFooter: FC<Props> = ({
  increment,
  decrement,
  incrementDisabled,
  decrementDisabled,
  ...product
}) => {
  const isOnCart = cartStore.isProductInCart(product.id)

  const handleAddToCart = () => cartStore.addProduct(product)

  return (
    <Footer.Root>
      <Footer.Content>
        {!isOnCart ? (
          <Footer.AddButton onClick={handleAddToCart}>
            <SmallPlusSvg />
          </Footer.AddButton>
        ) : (
          <Footer.ChangeCountLabel>
            <Footer.ChangeCountButton position='left' onClick={decrement}>
              <SmallMinusSvg />
            </Footer.ChangeCountButton>
            <Footer.Count>{product.count}</Footer.Count>
            <Footer.ChangeCountButton position='right' onClick={increment}>
              <SmallPlusSvg />
            </Footer.ChangeCountButton>
          </Footer.ChangeCountLabel>
        )}
      </Footer.Content>
    </Footer.Root>
  )
}

export default ProductCardFooter

interface Props extends ProductModel {
  increment: () => void
  decrement: () => void
  decrementDisabled?: boolean
  incrementDisabled?: boolean
}
