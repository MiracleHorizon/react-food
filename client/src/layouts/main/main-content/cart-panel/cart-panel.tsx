import dynamic from 'next/dynamic'

import PanelHeader from './cart-panel-header'
import PanelFooter from './cart-panel-footer'
import FullWidthOvalLoader from '@ui/loaders/full-width-oval-loader'
import { colors } from '@styles/variables'
import * as Panel from './cart-panel.styled'

const PanelContent = dynamic(import('./cart-panel-content'), {
  loading: () => <FullWidthOvalLoader color={colors.gray['7']} />,
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
