import { expect, test } from '@jest/globals'

import { OrderImpl } from './Order'
import type { OrderModel } from '@modules/Orders'
import { colors } from '@styles/colors'
import { DateFns } from '@libs/DateFns'

test('Testing Order entity', () => {
  const DELIVERY_TIME = 1000 // NOTE: Milliseconds

  const orderWithoutDates = {
    id: '1xc32osl5',
    userId: 'ddm43dkf93',
    products: [],
    commentary: '',
    serviceFee: 39,
    deliveryCost: 199,
    productsCost: 0,
    totalCost: 238,
    cutleryCount: 1,
    deliveryAddress: 'г. Москва, ул. Пушкина, д. 17',
    recipientPhoneNumber: '+7 999 999 99 99'
  } as Omit<OrderModel, 'createdAt' | 'updatedAt' | 'deliveredAt'>

  const order: OrderModel = {
    ...orderWithoutDates,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    deliveredAt: new Date(Date.now() + DELIVERY_TIME).toString()
  }
  const orderImpl = new OrderImpl(order)

  expect(orderImpl.isDelivered).toBeFalsy()
  expect(orderImpl.getStatusTitle()).toBe('Оплачен')
  expect(orderImpl.getStatusColor()).toBe(colors.black.primary)
  expect(orderImpl.getFormattedDate()).toBe(
    DateFns.formatDateWithFormat(new Date(order.createdAt), 'd MMMM k:mm')
  )

  setTimeout(() => {
    expect(orderImpl.isDelivered).toBeTruthy()
    expect(orderImpl.getStatusTitle()).toBe('Доставлен')
    expect(orderImpl.getStatusColor()).toBe(colors.green.primary)
  }, DELIVERY_TIME)
})
