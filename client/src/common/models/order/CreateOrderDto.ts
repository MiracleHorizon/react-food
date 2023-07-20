import type { CartProductModel } from '@models/product/CartProduct'
import type { AddressLocation } from '@models/user/AddressLocation'
import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'

export interface CreateOrderDto {
  cutleryCount: number
  serviceFee: number
  deliveryAddress: AddressLocation & DeliveryAddressDetailsForOrder
  productsData: CartProductModel[]
  recipientName: string
  recipientPhoneNumber: string
}
