import type { FC } from 'react'

import { DateFns } from '@libs/DateFns'
import type { OrderModel } from '@modules/Orders'
import { Root } from './SelectedOrderHeader.styled'

export const SelectedOrderHeader: FC<Props> = ({ id, createdAt }) => (
  <Root>
    <div>
      <span>№{id}</span>
    </div>
    <div>
      <span>
        Создан{' '}
        {DateFns.formatDateWithFormat(new Date(createdAt), 'd MMMM yyyy, k:mm')}
      </span>
    </div>
  </Root>
)

type Props = Pick<OrderModel, 'id' | 'createdAt'>
