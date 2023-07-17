import type { UseFormRegisterReturn } from 'react-hook-form'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import type { AuthFormInputModel } from '@modules/Auth/models/AuthFormInputModel'
import { Input } from './AuthFormInput.styled'

// TODO: Autocomplete warning
export const AuthFormInput = <T extends string>({
  register,
  ...props
}: Props<T>) => <Input {...register} {...props} />

// TODO: Унифицировать input props
interface Props<T extends string>
  extends AuthFormInputModel,
    EmotionClassNameProps {
  register: UseFormRegisterReturn<T>
}
