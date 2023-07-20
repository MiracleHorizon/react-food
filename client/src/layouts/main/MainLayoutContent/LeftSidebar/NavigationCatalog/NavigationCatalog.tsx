import { Navigation } from '@components/general/Navigation'
import { useNavigationStore } from '@stores/navigationStore'
import { Title } from './NavigationCatalog.styled'

export const NavigationCatalog = () => {
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
