import { observer } from 'mobx-react-lite'

import NavigationItem from './navigation-item'
import NavigationStore from '@/stores/Navigation.store'

const Navigation = () => (
  <nav>
    <ul>
      {NavigationStore.getCategories().map(category => (
        <NavigationItem key={category.id} {...category} />
      ))}
    </ul>
  </nav>
)

export default observer(Navigation)
