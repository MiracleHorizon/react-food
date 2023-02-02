import { observer } from 'mobx-react-lite'

import Navigation, { useNavigationStore } from './navigation'
import StyledTitle from './navigation-catalog.styled'

// TODO Skeleton loader
const NavigationCatalog = () => {
  if (useNavigationStore.categories.length === 0) {
    return null
  }

  return (
    <div>
      <StyledTitle>Каталог</StyledTitle>
      <Navigation categories={useNavigationStore.categories} />
    </div>
  )
}

export default observer(NavigationCatalog)
