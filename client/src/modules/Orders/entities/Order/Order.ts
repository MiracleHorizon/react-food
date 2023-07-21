import { DateFns } from '@libs/DateFns'
import type { OrderModel } from '@modules/Orders'
import { colors } from '@styles/colors'

export class OrderImpl {
  constructor(private readonly order: OrderModel) {}

  public getFormattedDate(): string {
    const createdAtDate = new Date(this.order.createdAt)
    const orderYear = createdAtDate.getFullYear()
    const currentYear = new Date().getFullYear()
    const createdAtDateFormat = `d MMMM k:mm${
      currentYear !== orderYear ? ', yyyy' : ''
    }`

    return DateFns.formatDateWithFormat(createdAtDate, createdAtDateFormat)
  }

  public getStatusColor(): string {
    return this.isDelivered ? colors.green.primary : colors.black.primary
  }

  public getStatusTitle(): string {
    return this.isDelivered ? 'Доставлен' : 'Оплачен'
  }

  public get isDelivered(): boolean {
    const currentDate = Date.now()
    const deliveredAtDate = new Date(this.order.deliveredAt)

    return deliveredAtDate.getTime() - currentDate <= 0
  }
}
