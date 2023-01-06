import { observer } from 'mobx-react-lite'

import AppStore from '@/stores/App.store'
import CatalogNavigationItem from '@/layouts/default/content/left-panel/catalog/navigation-item'
import * as Navigation from './CatalogNavigation.styles'

const CatalogNavigation = () => (
  <Navigation.Root>
    <Navigation.List>
      {AppStore.navigationCategories.map(category => (
        <CatalogNavigationItem key={category.id} {...category} />
      ))}
    </Navigation.List>
  </Navigation.Root>
)

export default observer(CatalogNavigation)
