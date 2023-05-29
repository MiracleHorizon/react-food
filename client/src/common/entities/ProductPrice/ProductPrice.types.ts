export interface ProductPriceModel {
  fullPrice: number
  discountPercent: number
}

// TODO: Cringe
export interface MainPriceData {
  totalPrice: string
  fullPrice: string
  withDiscount: boolean
}
