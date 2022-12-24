import type { OrderStatus } from '@prisma/client'

interface ClientOrderProduct {
  imageUrl: string
}

export interface ClientOrder {
  id: string
  status: OrderStatus
  totalPrice: number
  products: ClientOrderProduct[]
  productsCount: number
  createdAt: Date
}
