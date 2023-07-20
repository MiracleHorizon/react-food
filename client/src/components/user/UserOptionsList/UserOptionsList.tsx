import { type FC, useMemo } from 'react'

import { UserOptionItem } from './UserOptionItem'
import { useSignout } from '@hooks/useSignout'
import { useModalsStore } from '@stores/modalsStore'
import { Routes } from '@router/Routes.enum'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { Root } from './UserOptionsList.styled'

export const UserOptionsList: FC<Props> = ({
  className,
  universalClickAction
}) => {
  const { signout } = useSignout()

  const openPersonalDataModal = useModalsStore(
    state => state.openPersonalDataModal
  )
  const openUserAddressesModal = useModalsStore(
    state => state.openDeliveryAddressesModal
  )

  const menuItems = useMemo(() => {
    return [
      {
        title: 'Мои данные',
        action: openPersonalDataModal
      },
      {
        title: 'Мои адреса',
        action: openUserAddressesModal
      },
      {
        title: 'Мои заказы',
        href: Routes.ORDERS
      },
      {
        title: 'Выйти',
        action: signout
      }
    ]
  }, [openPersonalDataModal, openUserAddressesModal, signout])

  return (
    <Root className={className}>
      {menuItems.map(item => (
        <UserOptionItem
          key={item.title}
          {...item}
          universalClickAction={universalClickAction}
        />
      ))}
    </Root>
  )
}

interface Props extends EmotionClassNameProps {
  universalClickAction?: VoidFunction
}
