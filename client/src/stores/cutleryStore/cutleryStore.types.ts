export type CutleryStore = State & Computed & Action

interface State {
  count: number
  countRestriction: number
}

interface Computed {
  isAdded: () => boolean
  isMaxCount: () => boolean
}

interface Action {
  addCutlery: VoidFunction
  incrementCount: VoidFunction
  decrementCount: VoidFunction
}
