import dynamic from 'next/dynamic'

import PanelHeader from './cart-panel-header'
import PanelFooter from './cart-panel-footer'
import * as Panel from './cart-panel.styled'

const PanelContent = dynamic(import('./cart-panel-content'), {
  ssr: false
})

const CartPanel = () => (
  <Panel.Root>
    <Panel.Container>
      <PanelHeader />
      <PanelContent />
      <PanelFooter />
    </Panel.Container>
  </Panel.Root>
)

export default CartPanel
