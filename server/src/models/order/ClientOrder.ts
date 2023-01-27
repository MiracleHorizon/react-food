import { OrderStatus } from '@prisma/client'

interface ClientOrderProduct {
  imagePath: string
}

// TODO Переименовать
export interface ClientOrder {
  id: string
  status: OrderStatus
  totalCost: number
  products: ClientOrderProduct[]
  productsCount: number
  createdAt: Date
}
