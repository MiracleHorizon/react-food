import {type HTMLAttributes, type HTMLInputTypeAttribute, memo, useId} from 'react'
import type {UseFormRegisterReturn} from 'react-hook-form'

import * as Control from './PersonalDataFormControl.styled'

// TODO: Input register props
// TODO: Внешний вид записи телефона
export const PersonalDataFormControl = memo(
  <T extends string>({ label, ...inputProps }: Props<T>) => {
    const id = useId()

    return (
      <Control.Root>
        <Control.Label htmlFor={id}>{label}</Control.Label>
        <Control.Input id={id} {...inputProps} />
      </Control.Root>
    )
  }
)

interface Props<T extends string>
  extends Omit<
    HTMLAttributes<HTMLInputElement>,
    'type' | 'dangerouslySetInnerHTML'
  > {
  label: string
  type: HTMLInputTypeAttribute
  register: UseFormRegisterReturn<T>
}
