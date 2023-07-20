import { DeliveryAddressItem } from './DeliveryAddressItem'
import { useUserStore } from '@stores/userStore'

export const DeliveryAddressesList = () => {
  const deliveryAddresses = useUserStore(state => state.addresses)

  return (
    <ul>
      {deliveryAddresses.map(userAddress => (
        <DeliveryAddressItem key={userAddress.id} {...userAddress} />
      ))}
    </ul>
  )
}
