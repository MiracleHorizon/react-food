import type { FC } from 'react'

import { DateFns } from '@libs/DateFns'
import { Root } from './SelectedOrderHeader.styled'

const SelectedOrderHeader: FC<Props> = ({ id, createdAt }) => (
  <Root>
    <div>
      <span>№{id}</span>
    </div>
    <div>
      <span>
        Создан {DateFns.formatDateWithFormat(createdAt, 'd MMMM yyyy, k:mm')}
      </span>
    </div>
  </Root>
)

export default SelectedOrderHeader

interface Props {
  id: string
  createdAt: Date
}
