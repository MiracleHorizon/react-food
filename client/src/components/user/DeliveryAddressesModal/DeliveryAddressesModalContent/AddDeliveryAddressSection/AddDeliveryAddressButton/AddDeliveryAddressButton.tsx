import type { FC } from 'react'

import { ButtonVariant } from '@ui/Button'
import plusImage from '@public/images/plus.png'
import * as Button from './AddDeliveryAddressButton.styled'

export const AddDeliveryAddressButton: FC<Props> = props => (
  <Button.Root
    variant={ButtonVariant.SECONDARY}
    leadIcon={
      <Button.PlusIcon
        src={plusImage.src}
        width={18}
        height={18}
        alt='Добавить'
      />
    }
    title='Добавить ещё'
    {...props}
  />
)

interface Props {
  onClick: VoidFunction
}
