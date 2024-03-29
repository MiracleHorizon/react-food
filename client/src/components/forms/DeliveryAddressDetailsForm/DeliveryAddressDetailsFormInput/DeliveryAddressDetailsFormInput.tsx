import {
  type HTMLAttributes,
  type HTMLInputTypeAttribute,
  useId,
  useState
} from 'react'
import type { UseFormRegisterReturn, UseFormSetFocus } from 'react-hook-form'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Input from './DeliveryAddressDetailsFormInput.styled'

export const DeliveryAddressDetailsFormInput = <T extends string>({
  labelTitle,
  isEmpty,
  className,
  register,
  setFocus,
  ...props
}: Props<T>) => {
  const id = useId()
  const [isFocused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocus(register.name)
    setFocused(true)
  }

  const handleBlur = () => {
    if (isEmpty) setFocused(false)
  }

  return (
    <Input.Root
      className={className}
      isFocused={isFocused}
      isEmpty={isEmpty}
      tabIndex={0}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <Input.Label htmlFor={id} isEmpty={isEmpty} isFocused={isFocused}>
        {labelTitle}
      </Input.Label>
      <Input.Input {...props} {...register} id={id} />
    </Input.Root>
  )
}

interface Props<T extends string>
  extends Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'>,
    EmotionClassNameProps {
  type: HTMLInputTypeAttribute
  labelTitle: string
  maxLength: number
  isEmpty: boolean
  register: UseFormRegisterReturn<T>
  setFocus: UseFormSetFocus<any>
}
