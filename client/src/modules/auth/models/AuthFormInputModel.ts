import type { HTMLAttributes, HTMLInputTypeAttribute } from 'react'

export interface AuthFormInputModel
  extends Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'> {
  fieldName: string
  type: HTMLInputTypeAttribute
  placeholder: string
}
