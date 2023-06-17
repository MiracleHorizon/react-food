export interface OrderProductModel {
  id: string
  orderId: string
  title: string
  price: number
  count: number
  imagePath: string | null
  createdAt: Date
  updatedAt: Date
}
