import { action, makeObservable, observable, runInAction } from 'mobx'

import type { NavigationCategory } from '@models/navigation-category'

// TODO Целесообразность
class NavigationStore {
  public categories: NavigationCategory[] = []

  constructor() {
    makeObservable(this, {
      categories: observable,
      setCategories: action
    })
  }

  public setCategories(categories: NavigationCategory[]): void {
    if (this.categories.length === 0) {
      runInAction(() => (this.categories = categories))
    }
  }
}

export const useNavigationStore = new NavigationStore()
