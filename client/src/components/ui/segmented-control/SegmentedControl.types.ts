import type { ReactNode } from 'react'

export interface ISegmentedControlItem {
  title: string
  value: string
  icon?: ReactNode
}

export default interface SegmentedControlProps {
  items: ISegmentedControlItem[]
}
