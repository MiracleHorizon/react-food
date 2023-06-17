import type { DeliveryAddress } from '@models/user/DeliveryAddress'

export const getDeliveryAddressString = ({
  street,
  house
}: DeliveryAddress): string => `Ул. ${street}, д. ${house}`
