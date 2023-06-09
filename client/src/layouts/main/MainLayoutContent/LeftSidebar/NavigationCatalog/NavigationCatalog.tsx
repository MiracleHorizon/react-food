import Navigation from '@components/navigation/Navigation'
import { useNavigationStore } from '@stores/navigationStore'
import { Title } from './NavigationCatalog.styled'

const NavigationCatalog = () => {
  const isNavigationEmpty = useNavigationStore(state => state.isEmpty())

  if (isNavigationEmpty) {
    return null
  }

  return (
    <div>
      <Title>Каталог</Title>
      <Navigation />
    </div>
  )
}

export default NavigationCatalog
