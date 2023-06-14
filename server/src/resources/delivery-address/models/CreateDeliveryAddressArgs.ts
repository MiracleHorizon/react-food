import type { Res } from '@models/Res'
import type { CreateDeliveryAddressDto } from '../dto/CreateDeliveryAddress.dto'

export interface CreateDeliveryAddressArgs
  extends CreateDeliveryAddressDto,
    Res {
  userId: string
}
