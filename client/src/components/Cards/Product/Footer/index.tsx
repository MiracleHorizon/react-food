import { FC, useState } from 'react'

import SmallPlusSvg from '@/ui/svg/SmallPlusSvg'
import SmallMinusSvg from '@/ui/svg/SmallMinusSvg'
import * as Footer from './ProductCardFooter.styles'

const MAX_ORDER_WEIGHT_RESTRICTION = 5e3

const ProductCardFooter: FC<Props> = ({ id, weight }) => {
  // TODO Получать данные о наличии в корзине из хранилища корзины.
  const [cartCount, setCartCount] = useState(0)
  const [isOnCart, setIsOnCart] = useState(false)

  const addToCart = () => {
    // TODO Вынести в класс Product.
    console.log(`Продукт с айди: ${id} - добавлен в корзину`)
    setIsOnCart(true)
    setCartCount(1)
  }

  // TODO Вынести в класс Cart.
  const incrementCartCount = () => {
    // TODO Сопоставлять с весом заказа.
    if ((cartCount + 1) * weight <= MAX_ORDER_WEIGHT_RESTRICTION) {
      setCartCount(prevState => prevState + 1)
    }
  }

  // TODO Вынести в класс Cart.
  const decrementCartCount = () => {
    if (cartCount !== 0) {
      setCartCount(prevState => prevState - 1)
    }

    if (cartCount - 1 === 0) {
      setCartCount(prevState => prevState - 1)
      setIsOnCart(false)
    }
  }

  // TODO Со временем вынести контент в отдельный компонент.

  return (
    <Footer.Root>
      <Footer.Content>
        {!isOnCart ? (
          <Footer.CartButton onClick={addToCart}>
            <SmallPlusSvg />
          </Footer.CartButton>
        ) : (
          <Footer.CounterBlock>
            <button onClick={decrementCartCount}>
              <SmallMinusSvg />
            </button>
            <Footer.Counter>{cartCount}</Footer.Counter>
            <button onClick={incrementCartCount}>
              <SmallPlusSvg />
            </button>
          </Footer.CounterBlock>
        )}
      </Footer.Content>
    </Footer.Root>
  )
}

export default ProductCardFooter

interface Props {
  id: string
  weight: number
}
