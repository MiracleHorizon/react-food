import type { UserAddress } from '@models/user/UserAddress'

export const getUserAddressString = (address: UserAddress): string => {
  const {
    main: { street, house }
  } = address

  return `Ул. ${street}, д. ${house}`
}
