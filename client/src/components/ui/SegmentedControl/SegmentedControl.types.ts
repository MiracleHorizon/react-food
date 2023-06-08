import type { ReactNode } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

export interface Props extends EmotionClassNameProps {
  items: SegmentedControlItemModel[]
  onChange: (item: SegmentedControlItemModel) => void
}

export interface SegmentedControlItemModel {
  title: string
  icon?: ReactNode
}
