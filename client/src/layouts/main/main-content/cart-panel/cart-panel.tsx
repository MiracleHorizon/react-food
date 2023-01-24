import PanelHeader from './cart-panel-header'
import PanelContent from './cart-panel-content'
import PanelFooter from './cart-panel-footer'
import * as Panel from './cart-panel.styled'

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
