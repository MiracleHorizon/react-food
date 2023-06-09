import NavigationMenuItem from './NavigationItem'
import { useNavigationStore } from '@stores/navigationStore'

const Navigation = () => {
  const navigationCategories = useNavigationStore(state => state.categories)

  return (
    <nav>
      <ul>
        {navigationCategories.map(category => (
          <NavigationMenuItem key={category.id} {...category} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
