import type { FC } from 'react'

import NavigationItem from './navigation-item'
import type { NavigationCategory } from '@/models/navigation-category'

const Navigation: FC<Props> = ({ categories }) => (
  <nav>
    <ul>
      {categories.map(category => (
        <NavigationItem key={category.id} {...category} />
      ))}
    </ul>
  </nav>
)

export default Navigation

interface Props {
  categories: NavigationCategory[]
}
