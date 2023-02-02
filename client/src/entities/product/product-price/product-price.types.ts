export interface ProductPriceModel {
  fullPrice: number
  discountPercent: number
}

export interface PriceDescription {
  price: string
  fullPrice: string
  withDiscount: boolean
}

export type Rounding = 'floor' | 'ceil' | 'round'
