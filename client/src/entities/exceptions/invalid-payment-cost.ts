export class InvalidPaymentCostException extends Error {
  constructor() {
    super('Maximum payment limit exceeded.')
  }
}
