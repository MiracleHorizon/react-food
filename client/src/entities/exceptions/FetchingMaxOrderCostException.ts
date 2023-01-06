export class FetchingMaxOrderCostException extends Error {
  constructor() {
    super('An error occurred while getting the maximum order cost.')
  }
}
