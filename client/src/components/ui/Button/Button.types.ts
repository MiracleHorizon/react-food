import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface Props
  extends EmotionClassNameProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
  title?: string
  leadIcon?: ReactNode
  onClick?: VoidFunction
  isDisabled?: boolean
}
