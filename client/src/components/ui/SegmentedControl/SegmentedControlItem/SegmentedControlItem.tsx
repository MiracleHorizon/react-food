import {
  type Dispatch,
  type FC,
  memo,
  type SetStateAction,
  useCallback
} from 'react'

import type { SegmentedControlItemModel } from '@ui/SegmentedControl'
import * as Item from './SegmentedControlItem.styled'

export const SegmentedControlItem: FC<Props> = memo(
  ({ isSelected, setSelectedItem, onChange, ...item }) => {
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
)

interface Props extends SegmentedControlItemModel {
  isSelected: boolean
  setSelectedItem: Dispatch<SetStateAction<SegmentedControlItemModel>>
  onChange: (item: SegmentedControlItemModel) => void
}
