import type { CreateDeliveryAddressDto } from '../dto/CreateDeliveryAddress.dto'

export interface CreateDeliveryAddressArgs extends CreateDeliveryAddressDto {
  userId: string
}
