import { Dialog } from '@headlessui/react'
import { AnimatePresence } from 'framer-motion'
import type { FC } from 'react'

import MenuItem from './user-menu-item'
import { authService } from '@modules/auth'
import { useUserStore } from '@stores/user.store'
import { useCartStore } from '@stores/cart.store'
import { Routes } from '@router/routes.enum'
import type { ModalProps } from '@app-types/modal-props'
import type { UserModel } from '@models/user.model'
import * as Menu from './user-menu.styled'

const menuItems = [
  {
    title: 'Мои данные',
    action: () => {
      console.log('Открылось модальное окно с данными')
    }
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
      authService.signout().then(() => {
        useUserStore.signout()
        useCartStore.deinitialize()
      })
    }
  }
]

// TODO: Dialog -> Menu
const UserMenu: FC<Props> = ({ user, open, onClose }) => (
  <AnimatePresence>
    {open && (
      <Dialog
        as={Menu.Root}
        unmount={open}
        open={open}
        onClose={onClose}
        animate={open ? 'open' : 'closed'}
      >
        <Dialog.Panel as={Menu.Panel} {...Menu.panelAnimation}>
          <Dialog.Title as={Menu.Title}>{user.name}</Dialog.Title>
          <Menu.List variants={Menu.listAnimation}>
            {menuItems.map(item => (
              <MenuItem key={item.title} {...item} onClose={onClose} />
            ))}
          </Menu.List>
        </Dialog.Panel>
      </Dialog>
    )}
  </AnimatePresence>
)

export default UserMenu

interface Props extends ModalProps {
  user: UserModel
}
