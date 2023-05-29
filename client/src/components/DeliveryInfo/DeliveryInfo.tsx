import { type FC, useState } from 'react'

import DeliveryInfoContent from './DeliveryInfoContent'
import DeliveryInfoModal from './DeliveryInfoModal'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Info from './DeliveryInfo.styled'

const DeliveryInfo: FC<EmotionClassNameProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <Info.Root className={className} onClick={handleOpenModal}>
        <Info.Title>Доставка</Info.Title>
        <DeliveryInfoContent />
      </Info.Root>
      <DeliveryInfoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default DeliveryInfo
