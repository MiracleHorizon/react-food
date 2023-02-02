import { makeObservable, observable } from 'mobx'

import type { NavigationCategory } from '@/models/navigation-category'

// TODO Целесообразность
class NavigationStore {
  public categories: NavigationCategory[] = []

  constructor() {
    makeObservable(this, {
      categories: observable
    })
  }

  public setCategories(categories: NavigationCategory[]): void {
    if (this.categories.length === 0) {
      this.categories = categories
    }
  }
}

export const useNavigationStore = new NavigationStore()
