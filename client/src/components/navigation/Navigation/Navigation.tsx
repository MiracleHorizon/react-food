import { NavigationItem } from './NavigationItem'
import { useNavigationStore } from '@stores/navigationStore'
import * as Navigation from './Navigation.styled'

const NavigationComponent = () => {
  const navigationCategories = useNavigationStore(state => state.categories)

  return (
    <Navigation.Root>
      <Navigation.List>
        {navigationCategories.map(category => (
          <NavigationItem key={category.id} {...category} />
        ))}
      </Navigation.List>
    </Navigation.Root>
  )
}

export { NavigationComponent as Navigation }
