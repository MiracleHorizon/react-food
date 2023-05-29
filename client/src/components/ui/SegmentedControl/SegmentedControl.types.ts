import type { ReactNode } from 'react'

export interface Props {
  items: SegmentedControlItemModel[]
  onChange: (item: SegmentedControlItemModel) => void
}

export interface SegmentedControlItemModel {
  title: string
  icon?: ReactNode
}
