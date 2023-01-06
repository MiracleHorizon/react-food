import DeliveryInfo from './delivery-info'
import NavigationMenu from './catalog'
import * as Panel from './DefaultLayoutLeftPanel.styles'

const DefaultLayoutLeftPanel = () => (
  <Panel.Root>
    <DeliveryInfo />
    <NavigationMenu />
  </Panel.Root>
)

export default DefaultLayoutLeftPanel
