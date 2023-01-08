import Navigation from './CatalogNavigation'
import { Title } from '../DefaultLayoutLeftPanel.styles'
import * as Catalog from './DefaultLayoutCatalog.styles'

const DefaultLayoutCatalog = () => (
  <Catalog.Root>
    <Title>Каталог</Title>
    <Navigation />
  </Catalog.Root>
)

export default DefaultLayoutCatalog
