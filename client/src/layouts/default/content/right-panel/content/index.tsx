import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'

const DefaultLayoutRightPanelContent = () => {
  return (
    <main>
      {CartStore.isEmpty ? (
        <div>
          <span>В вашей корзине пока пусто</span>
        </div>
      ) : (
        <ul>
          {CartStore.products.map(product => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default observer(DefaultLayoutRightPanelContent)
