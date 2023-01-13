import { FC, useState } from 'react'

import SegmentedControlItem from '@/ui/segmented-control/item'
import type Props from './SegmentedControl.types'
import Control from './SegmentedControl.styles'

const SegmentedControl: FC<Props> = ({ items }) => {
  const [selectedSegment, setSelectedSegment] = useState(items[0])

  return (
    <Control>
      {items.map(item => (
        <SegmentedControlItem
          key={item.value}
          isSelected={selectedSegment.value === item.value}
          setSelectedSegment={setSelectedSegment}
          {...item}
        />
      ))}
    </Control>
  )
}

export default SegmentedControl
