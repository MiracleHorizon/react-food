import type { FC } from 'react'

import { DeliveryInfoContent } from './DeliveryInfoContent'
import { DeliveryInfoModal } from './DeliveryInfoModal'
import { useToggle } from '@hooks/useToggle'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Info from './DeliveryInfo.styled'

export const DeliveryInfo: FC<EmotionClassNameProps> = props => {
  const { isOpen, open, close } = useToggle(false)

  return (
    <>
      <Info.Root {...props} onClick={open}>
        <Info.Title>Доставка</Info.Title>
        <DeliveryInfoContent />
      </Info.Root>
      <DeliveryInfoModal isOpen={isOpen} onClose={close} />
    </>
  )
}
