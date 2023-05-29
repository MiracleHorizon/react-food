import type { HTMLAttributes, HTMLInputTypeAttribute } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Input from './AuthFormInput.styled'

const AuthFormInput = <T extends string>({
  register,
  className,
  ...inputAttributes
}: Props<T>) => (
  <Input.Root className={className}>
    <Input.Field {...register} {...inputAttributes} />
  </Input.Root>
)

export default AuthFormInput

interface Props<T extends string>
  extends Omit<
      HTMLAttributes<HTMLInputElement>,
      'type' | 'dangerouslySetInnerHTML'
    >,
    EmotionClassNameProps {
  type: HTMLInputTypeAttribute
  register: UseFormRegisterReturn<T>
}
