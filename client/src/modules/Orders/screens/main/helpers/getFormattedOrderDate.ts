import { DateFns } from '@libs/DateFns'

export const getFormattedOrderDate = (createdAt: Date): string => {
  const orderYear = new Date(createdAt).getFullYear()
  const currentYear = new Date().getFullYear()
  const createdAtDateFormat = `d MMMM k:mm${
    currentYear !== orderYear ? ', yyyy' : ''
  }`

  return DateFns.formatDateWithFormat(createdAt, createdAtDateFormat)
}
