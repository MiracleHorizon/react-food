export class InvalidPaymentPriceException extends Error {
  constructor() {
    super('Maximum payment limit exceeded.')
  }
}
