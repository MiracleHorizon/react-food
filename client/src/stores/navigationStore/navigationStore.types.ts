import type { NavigationCategory } from '@models/NavigationCategory'

export type NavigationStore = State & Computed & Action

interface State {
  categories: NavigationCategory[]
}

interface Computed {
  isEmpty: () => boolean
}

interface Action {
  setCategories: (categories: NavigationCategory[]) => void
}
