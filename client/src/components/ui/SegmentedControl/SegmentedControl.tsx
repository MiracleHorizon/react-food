import { type FC, useState } from 'react'

import SegmentedControlItem from './SegmentedControlItem'
import type { Props } from './SegmentedControl.types'
import { Root } from './SegmentedControl.styled'

const SegmentedControl: FC<Props> = ({ items, onChange, className }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]!)

  // TODO: Array min length
  if (items.length === 0) {
    return null
  }

  return (
    <Root className={className}>
      {items.map(item => (
        <SegmentedControlItem
          key={item.title}
          {...item}
          isSelected={selectedItem.title === item.title}
          setSelectedItem={setSelectedItem}
          onChange={onChange}
        />
      ))}
    </Root>
  )
}

export default SegmentedControl
