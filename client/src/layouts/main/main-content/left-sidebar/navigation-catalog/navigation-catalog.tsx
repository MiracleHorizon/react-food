import { observer } from 'mobx-react-lite'

import Navigation, { navigationStore } from './navigation'
import StyledTitle from './navigation-catalog.styled'

// TODO Skeleton loader
const NavigationCatalog = () => {
  if (navigationStore.categories.length === 0) {
    return null
  }

  return (
    <div>
      <StyledTitle>Каталог</StyledTitle>
      <Navigation categories={navigationStore.categories} />
    </div>
  )
}

export default observer(NavigationCatalog)
