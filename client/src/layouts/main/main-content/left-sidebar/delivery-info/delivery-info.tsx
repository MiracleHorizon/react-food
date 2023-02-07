import { useState } from 'react'

import InfoContent from './delivery-info-content'
import InfoModal from './delivery-info-modal'
import * as Info from './delivery-info.styled'

const DeliveryInfo = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)

  const handleCloseModal = () => setModalOpen(false)

  return (
    <>
      <Info.Root onClick={handleOpenModal}>
        <Info.StyledTitle>Доставка</Info.StyledTitle>
        <InfoContent />
      </Info.Root>
      <InfoModal open={modalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default DeliveryInfo
