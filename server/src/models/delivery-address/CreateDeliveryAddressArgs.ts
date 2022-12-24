import { CreateDeliveryAddressDto } from '@/resources/delivery-address/dto/create-delivery-address.dto'
import type { Res } from '@/models/Res'

export interface CreateDeliveryAddressArgs
  extends CreateDeliveryAddressDto,
    Res {
  userId: string
}
