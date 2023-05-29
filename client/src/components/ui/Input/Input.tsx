import type { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Input from './Input.styled'

const InputComponent = <T extends string>({
  register,
  leadIcon,
  isEmpty,
  className,
  onClear,
  ...inputAttributes
}: Props<T>) => (
  <Input.Root
    className={className}
    withLeadIcon={Boolean(leadIcon)}
    withClearAction={Boolean(onClear)}
  >
    {leadIcon && <Input.LeadIconContainer>{leadIcon}</Input.LeadIconContainer>}
    <Input.Field {...register} {...inputAttributes} />
    {onClear && !isEmpty && (
      <Input.ClearIconSvg viewBox='0 0 30 30' onClick={onClear}>
        <path d='M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z' />
      </Input.ClearIconSvg>
    )}
  </Input.Root>
)

export default InputComponent

interface Props<T extends string>
  extends EmotionClassNameProps,
    Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'dangerouslySetInnerHTML'> {
  type: HTMLInputTypeAttribute
  register: UseFormRegisterReturn<T>
  isEmpty?: boolean
  leadIcon?: ReactNode
  onClear?: VoidFunction
}
