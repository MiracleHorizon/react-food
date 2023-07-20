import dynamic from 'next/dynamic'

import { useModalsStore } from '@stores/modalsStore'

const PersonalDataModal = dynamic(
  import('./PersonalDataModal').then(mod => mod.PersonalDataModal),
  { ssr: false }
)
const DeliveryAddressesModal = dynamic(
  import('./DeliveryAddressesModal').then(mod => mod.DeliveryAddressesModal),
  { ssr: false }
)

export const UserModalsOverlay = () => {
  const isPersonalModalOpen = useModalsStore(state => state.isPersonalModalOpen)
  const isDeliveryAddressesModalOpen = useModalsStore(
    state => state.isDeliveryAddressesModalOpen
  )

  return (
    <>
      {isPersonalModalOpen && <PersonalDataModal />}
      {isDeliveryAddressesModalOpen && <DeliveryAddressesModal />}
    </>
  )
}
