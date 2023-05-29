import { Dispatch, FC, memo, SetStateAction, useCallback } from 'react'

import type { SegmentedControlItemModel } from '@ui/SegmentedControl'
import * as Item from './SegmentedControlItem.styled'

const SegmentedControlItem: FC<Props> = ({
  isSelected,
  setSelectedItem,
  onChange,
  ...item
}) => {
  const handleClick = useCallback(() => {
    setSelectedItem(item)
    onChange(item)
  }, [setSelectedItem, onChange, item])

  return (
    <Item.Root isSelected={isSelected} onClick={handleClick}>
      <Item.Title isSelected={isSelected}>{item.title}</Item.Title>
      {item.icon}
    </Item.Root>
  )
}

export default memo(SegmentedControlItem)

interface Props extends SegmentedControlItemModel {
  isSelected: boolean
  setSelectedItem: Dispatch<SetStateAction<SegmentedControlItemModel>>
  onChange: (item: SegmentedControlItemModel) => void
}