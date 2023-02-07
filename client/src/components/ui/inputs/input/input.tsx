import type { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

import * as StyledInput from './input.styled'

const Input = <T extends string>({
  register,
  icon,
  className,
  isEmpty,
  onClear,
  ...options
}: Props<T>) => (
  <StyledInput.Root
    className={className}
    withClear={Boolean(onClear)}
    withIcon={Boolean(icon)}
  >
    {icon && <StyledInput.IconContainer>{icon}</StyledInput.IconContainer>}
    <StyledInput.Input {...register} {...options} />
    {onClear && !isEmpty && (
      <StyledInput.ClearSvg onClick={onClear} viewBox='0 0 30 30'>
        <path d='M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z' />
      </StyledInput.ClearSvg>
    )}
  </StyledInput.Root>
)

export default Input

interface Props<T extends string>
  extends Omit<HTMLAttributes<HTMLInputElement>, 'type'> {
  type: HTMLInputTypeAttribute
  register: UseFormRegisterReturn<T>
  icon?: ReactNode
  className?: string
  isEmpty?: boolean
  onClear?: () => void
}
