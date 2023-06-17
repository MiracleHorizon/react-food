import type { CartProductModel } from '@models/product/CartProduct'
import type { DeliveryAddressLocation } from '@models/user/DeliveryAddressLocation'
import type { DeliveryAddressDetailsForOrder } from '@models/user/DeliveryAddressDetailsForOrder'

export interface CreateOrderDto {
  cutleryCount: number
  serviceFee: number
  deliveryAddress: DeliveryAddressLocation & DeliveryAddressDetailsForOrder
  productsData: CartProductModel[]
  recipientName: string
  recipientPhoneNumber: string
}
