import DeliveryInfo from './delivery-info'
import NavigationCatalog from './navigation-catalog'
import * as Sidebar from './left-sidebar.styled'

const LeftSidebar = () => (
  <Sidebar.Root>
    <DeliveryInfo />
    <NavigationCatalog />
  </Sidebar.Root>
)

export default LeftSidebar
