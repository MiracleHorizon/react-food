import { memo } from 'react'
import type { FC } from 'react'

import { RUBLE_SIGN } from '@/utils/constants'
import Item from './CostItem.styles'

const CostItem = () => {
  return <div></div>
}

export default memo(CostItem)

// const CostItem: FC<CostItem> = ({ title, cost }) => (
//   <Item>
//     <span>{title}</span>
//     <p>
//       {cost}
//       <span>{RUBLE_SIGN}</span>
//     </p>
//   </Item>
// )
//
// CostItem.displayName = 'CostItem'
//
// export default memo(CostItem)
