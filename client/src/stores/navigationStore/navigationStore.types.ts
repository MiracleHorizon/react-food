import type { NavigationCategory } from '@models/NavigationCategory'

export type NavigationStore = State & Computed & Actions

interface State {
  isLoading: boolean
  categories: NavigationCategory[]
}

interface Computed {
  isEmpty: () => boolean
}

interface Actions {
  setCategories: (categories: NavigationCategory[]) => void
  setLoadingStatus: (isLoading: boolean) => void
}
