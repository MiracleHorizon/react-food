import dynamic from 'next/dynamic'

import { AddDeliveryAddressSection } from './AddDeliveryAddressSection'
import { useUserStore } from '@stores/userStore'

const DeliveryAddressesList = dynamic(
  import('./DeliveryAddressesList').then(mod => mod.DeliveryAddressesList),
  { ssr: false }
)

export const DeliveryAddressesModalContent = () => {
  const isAddressesEmpty = useUserStore(state => state.isAddressesEmpty())

  return (
    <>
      {!isAddressesEmpty && <DeliveryAddressesList />}
      <AddDeliveryAddressSection />
    </>
  )
}
