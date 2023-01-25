import { observer } from 'mobx-react-lite'

import NavigationItem from './navigation-item'
import { navigationStore } from '@/layouts/main'

const Navigation = () => (
  <nav>
    <ul>
      {navigationStore.getCategories().map(category => (
        <NavigationItem key={category.id} {...category} />
      ))}
    </ul>
  </nav>
)

export default observer(Navigation)
