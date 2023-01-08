import { observer } from 'mobx-react-lite'

import AppStore from '@/stores/App.store'
import CatalogNavigationItem from './navigation-item'

const CatalogNavigation = () => (
  <nav>
    <ul>
      {AppStore.navigationCategories.map(category => (
        <CatalogNavigationItem key={category.id} {...category} />
      ))}
    </ul>
  </nav>
)

export default observer(CatalogNavigation)
