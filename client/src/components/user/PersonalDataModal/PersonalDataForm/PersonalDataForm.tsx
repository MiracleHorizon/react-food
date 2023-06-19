import { useForm } from 'react-hook-form'
import type { FC, PropsWithChildren } from 'react'
import { useMemo } from 'react'

import PersonalDataFormControl from './PersonalDataFormControl'
import type { UserModel } from '@models/user/User'
import type { UserPersonalData } from '@models/user/UserPersonalData'

const PersonalDataForm: FC<Props> = ({ children, user, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber ?? ''
    }
  })

  const items = useMemo(() => {
    // TODO: Валидация
    return [
      {
        label: 'Имя',
        type: 'text',
        placeholder: 'Ваше имя',
        defaultValue: user.name,
        register: register('name', {
          minLength: 4
        })
      },
      {
        label: 'Эл. почта',
        type: 'email',
        placeholder: 'Эл. почта',
        defaultValue: user.email,
        register: register('email')
      },
      {
        label: 'Телефон',
        type: 'tel',
        placeholder: '+7',
        defaultValue: user.phoneNumber ?? '',
        register: register('phoneNumber')
      }
    ]
  }, [register, user.email, user.name, user.phoneNumber])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {items.map(item => (
        <PersonalDataFormControl key={item.label} {...item} />
      ))}
      {children}
    </form>
  )
}

export default PersonalDataForm

interface Props extends PropsWithChildren {
  user: UserModel
  onSubmit: (data: UserPersonalData) => void
}
