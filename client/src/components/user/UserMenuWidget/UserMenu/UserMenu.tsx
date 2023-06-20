import { type FC, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import { Dialog } from '@headlessui/react'

import UserMenuItem from './UserMenuItem'
import { authService } from '@api/AuthService'
import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { useModalsStore } from '@stores/modalsStore'
import { Routes } from '@router/Routes.enum'
import type { UserModel } from '@models/user/User'
import * as Menu from './UserMenu.styled'

// TODO: Dialog -> Menu
const UserMenu: FC<Props> = ({ user, isOpen, onClose }) => {
  const router = useRouter()
  const panelRef = useRef<HTMLDivElement>(null)

  const signout = useUserStore(state => state.signout)
  const deinitializeCart = useCartStore(state => state.deinitialize)
  const openPersonalDataModal = useModalsStore(
    state => state.openPersonalDataModal
  )

  const menuItems = useMemo(() => {
    return [
      {
        title: 'Мои данные',
        action: openPersonalDataModal
      },
      {
        title: 'Мои адреса',
        action: () => {
          console.log('Открылось модальное окно с адресами')
        }
      },
      {
        title: 'Мои заказы',
        href: Routes.ORDERS
      },
      {
        title: 'Выйти',
        action: () => {
          authService
            .signout()
            .then(() => router.replace(Routes.HOME))
            .then(() => {
              // TODO: Deinitialize all
              // TODO: Редирект только если для страницы необходимо авторизация
              deinitializeCart()
              signout()
            })
        }
      }
    ]
  }, [deinitializeCart, openPersonalDataModal, router, signout])

  return (
    <Dialog
      as={Menu.Root}
      initialFocus={panelRef}
      unmount={true}
      open={isOpen}
      onClose={onClose}
    >
      <Dialog.Panel as={Menu.Panel} ref={panelRef}>
        <Dialog.Title as={Menu.Title}>{user.name}</Dialog.Title>
        <Menu.List>
          {menuItems.map(item => (
            <UserMenuItem key={item.title} {...item} onClose={onClose} />
          ))}
        </Menu.List>
      </Dialog.Panel>
    </Dialog>
  )
}

export default UserMenu

interface Props {
  user: UserModel
  isOpen: boolean
  onClose: VoidFunction
}
