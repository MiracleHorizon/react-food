export type ModalsStore = State & Actions

interface State {
  isPersonalModalOpen: boolean
}

interface Actions {
  openPersonalDataModal: VoidFunction
  closePersonalDataModal: VoidFunction
}
