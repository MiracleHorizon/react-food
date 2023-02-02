import { useState } from 'react'

import InfoContent from './delivery-info-content'
import InfoModal from './delivery-info-modal'
import * as Info from './delivery-info.styled'

const DeliveryInfo = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const onOpenModal = () => setModalOpen(true)

  const onCloseModal = () => setModalOpen(false)

  return (
    <>
      <Info.Root onClick={onOpenModal}>
        <Info.StyledTitle>Доставка</Info.StyledTitle>
        <InfoContent />
      </Info.Root>
      <InfoModal open={modalOpen} onClose={onCloseModal} />
    </>
  )
}

export default DeliveryInfo
