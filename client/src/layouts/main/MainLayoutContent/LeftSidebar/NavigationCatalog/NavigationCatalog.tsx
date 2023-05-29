import Navigation from './Navigation'
import { useNavigationStore } from '@stores/navigationStore'
import { Title } from './NavigationCatalog.styled'

const NavigationCatalog = () => {
  const navigationCategories = useNavigationStore().categories
  const isNavigationEmpty = useNavigationStore().isEmpty()

  if (isNavigationEmpty) {
    return null
  }

  return (
    <div>
      <Title>Каталог</Title>
      <Navigation categories={navigationCategories} />
    </div>
  )
}

export default NavigationCatalog
