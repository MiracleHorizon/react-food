export class InvalidOrderWeightException extends Error {
  constructor() {
    super('Maximum order weight exceeded')
  }
}
