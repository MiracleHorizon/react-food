import { makeObservable, observable } from 'mobx'

import type { NavigationCategory } from '@/models/navigation-category'

class NavigationStore {
  categories: NavigationCategory[] = []

  constructor() {
    makeObservable(this, {
      categories: observable
    })
  }

  public getCategories(): NavigationCategory[] {
    return this.categories
  }

  public setCategories(categories: NavigationCategory[]): void {
    if (this.categories.length === 0) {
      this.categories = categories
    }
  }
}

export const navigationStore = new NavigationStore()
