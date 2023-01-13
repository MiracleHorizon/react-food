import { observer } from 'mobx-react-lite'

import ApplicationStore from '@/stores/Application.store'
import CatalogNavigationItem from './navigation-item'

const CatalogNavigation = () => (
  <nav>
    <ul>
      {ApplicationStore.navigationCategories.map(category => (
        <CatalogNavigationItem key={category.id} {...category} />
      ))}
    </ul>
  </nav>
)

export default observer(CatalogNavigation)
