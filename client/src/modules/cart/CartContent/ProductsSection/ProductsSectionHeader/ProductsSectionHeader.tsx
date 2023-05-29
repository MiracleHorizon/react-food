import { useMemo } from 'react'

import { useCartStore } from '@stores/cartStore'
import { RuNounNumeralFormatter } from '@utils/RuNounNumeralFormatter'
import * as Header from './ProductsSectionHeader.styled'

const ProductsSectionHeader = () => {
  const totalPositions = useCartStore(state => state.totalPositions())

  const productNounNumeralFormatter = useMemo(() => {
    return new RuNounNumeralFormatter({
      nounRoot: 'товар',
      fewFormEnding: 'а',
      pluralFormEnding: 'ов'
    })
  }, [])

  return (
    <Header.Root>
      <div>
        <Header.Title>Ваш заказ</Header.Title>
        <Header.ProductsCount>
          {productNounNumeralFormatter.format(
            totalPositions > 0 ? totalPositions : 0
          )}
        </Header.ProductsCount>
      </div>
      <Header.ClearCartLabel title='Очистить корзину' withConfirm withImage />
    </Header.Root>
  )
}

export default ProductsSectionHeader