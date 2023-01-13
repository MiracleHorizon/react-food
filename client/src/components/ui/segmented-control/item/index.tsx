import { Dispatch, FC, memo, SetStateAction } from 'react'

import type { ISegmentedControlItem } from '../SegmentedControl.types'
import * as Item from './SegmentedControlItem.styles'

const SegmentedControlItem: FC<Props> = ({
  title,
  value,
  isSelected,
  setSelectedSegment,
  icon
}) => {
  const handleSetSelectedSegment = () => setSelectedSegment({ title, value })

  return (
    <Item.Root isSelected={isSelected} onClick={handleSetSelectedSegment}>
      <Item.Title>{title}</Item.Title>
      {icon}
    </Item.Root>
  )
}

SegmentedControlItem.displayName = 'SegmentedControlItem'

export default memo(SegmentedControlItem)

interface Props extends ISegmentedControlItem {
  isSelected: boolean
  setSelectedSegment: Dispatch<SetStateAction<ISegmentedControlItem>>
}
