import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import * as Header from './DefaultLayoutRightPanelHeader.styles'

const DefaultLayoutRightPanelHeader = () => {
  const handleClearCart = () => CartStore.clear()

  return (
    <Header.Root>
      <Header.Title>Корзина</Header.Title>
      {!CartStore.isEmpty && (
        <button onClick={handleClearCart}>Очистить</button>
      )}
    </Header.Root>
  )
}

export default observer(DefaultLayoutRightPanelHeader)
