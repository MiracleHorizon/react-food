import type { FC } from 'react'

import { DateFns } from '@libs/DateFns'
import { Root } from './SelectedOrderHeader.styled'

const dateFormat = 'd MMMM yyyy, k:mm'

export const SelectedOrderHeader: FC<Props> = ({ id, createdAt }) => (
  <Root>
    <div>
      <span>№{id}</span>
    </div>
    <div>
      <span>Создан {DateFns.formatDateWithFormat(createdAt, dateFormat)}</span>
    </div>
  </Root>
)

interface Props {
  id: string
  createdAt: Date
}