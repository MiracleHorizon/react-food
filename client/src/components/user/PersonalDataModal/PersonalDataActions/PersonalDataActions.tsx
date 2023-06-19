import type { FC } from 'react'

import { ButtonVariant } from '@ui/Button'
import * as Actions from './PersonalDataActions.styled'

const PersonalDataActions: FC<Props> = ({ onClose }) => (
  <Actions.Root>
    <Actions.Button
      title='Сохранить изменения'
      variant={ButtonVariant.PRIMARY}
      type='submit'
    />
    <Actions.Button
      title='Отмена'
      variant={ButtonVariant.SECONDARY}
      onClick={onClose}
    />
  </Actions.Root>
)

export default PersonalDataActions

interface Props {
  onClose: VoidFunction
}
